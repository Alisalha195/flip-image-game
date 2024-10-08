import {shuffle} from "@/lib/actions" ;

export const images = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg'];




export const getShuffledImages = () => {
	const shuffledBase = shuffle(images);
	const shuffledCopy = shuffle(images);
	const shuffeledImagesToUse = [...shuffledBase , ...shuffledCopy];

	const shuffeledImagesObjectToUse = [shuffeledImagesToUse.map((item,index)=> ({id:index , name:item}))]
	return shuffeledImagesToUse;
}
