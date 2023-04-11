import axios from "axios";

//graphql client encapsulation
export default axios.create({
    baseURL: "http://localhost:4000/",
    headers: {
        "Content-type": "application/graphql",
    },
    
});


// lien vers le repo github de l'api graphql pour médicament https://github.com/axel-op/api-bdpm-graphql