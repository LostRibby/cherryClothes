import { useEffect, useRef } from "react";
import { useState } from "react";
import axios from "axios";



export const ImagePostApp = () => {


    const [selectedImage, setSelectedImage] = useState(null);
    const [posts, setPosts] = useState([]);
    const [captions, setCaptions] = useState('')
    const fileInputRef = useRef(null);
    const [file, setFile] = useState(null);
    const [user, setUser] = useState(null); 
   
    useEffect(() =>{
        const fakeUser = {_id:"123456789"}; 
        setUser(fakeUser); 
    },[])

    const userId = user?._id; 
    //Select image
    const handleImage = (e) => {

        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setSelectedImage(URL.createObjectURL(file));
            setFile(file); 
        } else {
            alert("Veuillez selectionner un fichier image valide 📷");

        }
    }
    //gestion post

    const handlePostSubmit = async (e) => {
        e.preventDefault();
        
        if (!selectedImage) {
            alert('Veuillez selectionner une image');
            return;
        }
        if (!captions.trim()) {
            alert('Veuillez ajouter une légende');
             return; 
        }

        const formData = new FormData();
        formData.append("image", file);
        formData.append("captions", captions);
        formData.append("userId", userId); 

        try {
            const response = await axios.post('http://localhost:3000/api/posts', formData, {
                headers: {
                    "Content-Type" : "multipart/form-data"
                }
            });
            const data = await response.data;
            setPosts([data, ...posts]); 
           
        } catch (err) {
            console.log(err);
        }
        //reinitialisation du post

        setSelectedImage(null);
        setCaptions("");
        setFile(null); 

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }

    }
        useEffect( () => {
            const fetchPosts = async () => {
                try {
                    const res = await axios.get('http://localhost:3000/api/posts');
                    setPosts(res.data);
                } catch (err) {
                    console.log(err);

                }
            }
            fetchPosts();
        },[]); 


    return (
        <div>

            <h2>Postez votre collection</h2>

            <form onSubmit={handlePostSubmit}>
                <input type='file' accept="image/*" onChange={handleImage} ref={fileInputRef} />

                <br />
                {selectedImage && (
                    <div>
                        <img src={selectedImage} alt="Prévisualisation de l'image" />

                    </div>
                )}

                <textarea placeholder="Donnez nous des détails sur votre collection..." value={captions} onChange={(e) => setCaptions(e.target.value)} />

                <button type='submit'>Poster</button>

            </form>

            <hr />

            <h3>Posts récents</h3>
            {posts.length === 0 && <p>Aucun posts pour le moment...😥</p>}
             {posts.map((post, index) => (
          <div key={index}>
            <img src={post.imageUrl} alt="post" width="200" />
            <p>{post.captions}</p>
            </div>
            ))}
            

        </div>

    )
} 