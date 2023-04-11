import axios from "axios";

//graphql client encapsulation
export default axios.create({
    baseURL: "http://localhost:4000/",
    headers: {
        "Content-type": "application/graphql",
    },
    
});