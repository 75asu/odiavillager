![mern stack project](https://github.com/amirrezaRst/StreamVibe/blob/master/frontend/public/github/project-thumbnail.jpg?raw=true)
# <img src="https://github.com/amirrezaRst/StreamVibe/blob/master/frontend/public/github/logo.png?raw=true" alt="description" width="49" height="49"> **StreamVibe** - Fullstack MERN & Next.js Project for Movie and TV Show Streaming

[![GitHub stars](https://img.shields.io/github/stars/amirrezaRst/StreamVibe?style=social)](https://github.com/amirrezaRst/StreamVibe/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/amirrezaRst/StreamVibe?style=social)](https://github.com/amirrezaRst/StreamVibe/network/members)

### Under Ongoing Development

## **Table of Contents**

1. [Installation](#installation)
2. [Usage](#usage)



## **Installation** <a name="installation"></a>

To get a local copy of **StreamVibe** up and running, follow these steps:  
To set up and run the StreamVibe project locally, follow these steps. Make sure you have both Node.js and MongoDB installed on your machine before starting. The project consists of two parts: the backend (Node.js, Express, MongoDB) and the frontend (Next.js, React, Tailwind CSS). Each part needs to be set up separately.  

### **1. Clone the backend repository**  
Start by cloning the StreamVibe repository from GitHub:  
```
git clone https://github.com/your-username/streamvibe.git
cd streamvibe
```
The project contains two folders: backend and frontend. You will need to set up both independently.  

### **2. Backend Setup**  
1. Navigate to the backend directory:  
```
cd backend
```
2. Install dependencies: Ensure you're inside the backend folder, then run the following command to install all necessary dependencies:
```
# terminal 1
docker pull mongodb/mongodb-community-server:latest
docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest

# teminal 2
npm install

```
3. Run the backend server: Start the backend server with the following command:
```
npm run dev
```
This will start the backend server at http://localhost:5000. Ensure MongoDB is running locally or via your MongoDB cloud service.  


### **3. Frontend Setup**  
Now, you need to set up the frontend, which is located in the frontend folder.  
1. Open a new terminal window and navigate to the frontend directory:
```
cd frontend
```
2. Install dependencies: Run the following command to install all frontend dependencies:
```
npm install
npx update-browserslist-db@latest
```
3. Run the frontend development server: Start the frontend server with the following command:
```
npm run dev
```


