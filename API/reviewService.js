// reviewService.js
import { db,  storage} from "./firebaseconfig";
import { collection, addDoc, getDocs, query, orderBy, limit, startAfter } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

async function storePhoto(photo) {
    const storageRef = ref(storage, 'photos/' + photo.name);
    await uploadBytes(storageRef, photo);//
    const photoURL = await getDownloadURL(storageRef);
    return photoURL;
}

async function getPhoto(link) {
    const photoRef = ref(storage, link);
    const photoURL = await getDownloadURL(photoRef);
    return photoURL;
}

async function storeReview(name, rating, content, photos) {
    const photoURLs = [];
    for (let photo of photos) {
        const photoURL = await storePhoto(photo);
        photoURLs.push(photoURL);
    }

    const reviewDoc = {
        name,
        rating,
        content,
        photos: photoURLs,
        timestamp: new Date()
    };

    await addDoc(collection(db, "reviews"), reviewDoc);
}

async function retrieveNextFiveReviews(lastVisible = null) {
    let reviewsQuery = query(
        collection(db, "reviews"),
        orderBy("timestamp", "desc"),
        limit(5)
    );

    if (lastVisible) {
        reviewsQuery = query(reviewsQuery, startAfter(lastVisible));
    }

    const reviewsSnapshot = await getDocs(reviewsQuery);
    const reviews = [];
    reviewsSnapshot.forEach((doc) => {
        reviews.push({ id: doc.id, ...doc.data() });
    });

    return { reviews, lastVisible: reviewsSnapshot.docs[reviewsSnapshot.docs.length - 1] };
}

export { storePhoto, getPhoto, storeReview, retrieveNextFiveReviews };