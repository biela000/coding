import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import memesData from "../memesData";

export default function MemeTextForm() {
    // console.log(Math.floor(Math.random() * (max - min) + min));
    // const a = () => console.log(memeObjectArray[Math.floor(Math.random() * memeObjectArray.length)].url);
    const [allMemeImages, setAllMemeImages] = useState(memesData);
    const memesArray = allMemeImages.data.memes;
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: memesArray[0].url
    });
    function getRandomMemeImage() {
        if (memesData.success) {
            const randomMemeIndex = Math.floor(Math.random() * memesArray.length);
            setMeme(prevMeme => {
                return {
                    ...prevMeme,
                    randomImage: memesArray[randomMemeIndex].url
                };
            });
        }
    }
    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        });
    }
    return (
        <div className="meme-text-form-container">
            <div className="meme-text-form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="meme-text-form-top-text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="meme-text-form-bottom-text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button className="meme-text-form-button" onClick={getRandomMemeImage}>Get a new meme image <FontAwesomeIcon icon={faImage} /></button>
            </div>
            <div className="meme-image-container">
                <p className="meme-text meme-text-top">{meme.topText}</p>
                <p className="meme-text meme-text-bottom">{meme.bottomText}</p>
                <img
                    src={meme.randomImage}
                    alt="Meme"
                    className="meme-image"
                />
            </div>
        </div>
    );
}