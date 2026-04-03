
import { useState } from "react";
import axios from 'axios';
import Style from './Register.module.css'

export function RegisterForm() {
    const [error, setError] = useState(''); 
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        role: 'Membre'
    });

    const [message, setMessage] = useState('')
    const handleChange = async (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        

        if (!formData.firstname||!formData.lastname||!formData.email||!formData.password) {
            setError('veuillez remplir tous les champs')
            return;
        }

try{
const response = await axios.post('http://localhost:3000/api/users',formData);

setMessage('Inscription réussie' + response.data.message)
setError('')
setFormData({firstname:'', lastname:'', email:'', password:'', role:'Membre'})
}catch(err){

if(err.response){
    setError('Erreur lors de l\'inscription');
}else{
    setMessage('Impossible de se connecter au serveur')
}


}

console.log('Données inscription:', formData);

    }

    return (
        <div className={Style.bg}>
            <h1 className={Style.inscription}>Inscription</h1>
            <div className={Style.container}>
                <form onSubmit={handleSubmit} className={Style.RegisterForm}>

                    <div className={Style.ContainerInput}>
                    <label htmlFor="firstname">Prénom</label>
                    <input type='text' name='firstname' placeholder='Prénom'
                    value={formData.firstname}  onChange={handleChange} />
</div >
<div className={Style.ContainerInput}>
                    <label htmlFor="lastname">Nom</label>
                    <input type="text" name='lastname' placeholder='Nom' 
                    value={formData.lastname} onChange={handleChange} />
</div>
<div className={Style.ContainerInput}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' 
                    value={formData.email} placeholder='Email' onChange={handleChange} />
</div>
<div className={Style.ContainerInput}>
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" 
                    value={formData.password} placeholder='Mot de passe' onChange={handleChange} />
</div>
<div className={Style.ContainerInput}>
                    <label htmlFor="role">Role</label>
                    <select name="role">
                        <option value="Membre">Membre</option>
                        <option value="Artiste">Artiste</option>
                    </select>
</div>
                    <button className={Style.submit} type='submit'>S'inscrire</button>
                </form>
            </div>
        </div>
    )
}


