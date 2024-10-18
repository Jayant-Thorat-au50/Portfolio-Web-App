import axios from "axios"

async function UseGitHubData() {
    
    
    const response = await axios.get(
        "https://api.github.com/users/Jayant-Thorat-au50"
    );
     return response;
}

export default UseGitHubData
