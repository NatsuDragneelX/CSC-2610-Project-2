
---

### **Installation Instructions**

Follow these steps to set up and run the application:

---

#### **1. Prerequisites**
Before starting, ensure you have the following installed on your system:
- **Node.js**: [Download Node.js](https://nodejs.org/)
- **MongoDB**:
  - Install MongoDB Community Server locally: [Download MongoDB](https://www.mongodb.com/try/download/community)
  - Alternatively, use **MongoDB Atlas** for cloud-hosted MongoDB.
- **Git** (optional but recommended): [Download Git](https://git-scm.com/)

---

#### **2. Clone the Repository**
Clone the project repository to your local machine:
```bash
git clone <repository-url>
cd <repository-folder>
```

---

#### **3. Install Dependencies**
Run the following command in the project directory to install all required Node.js packages:
```bash
npm install
```

This will install the following dependencies:
- **express**: Web application framework.
- **mongoose**: MongoDB object modeling for Node.js.
- **body-parser**: Middleware to parse incoming request bodies.
- **ejs**: Template engine for rendering HTML views.
- **dotenv**: Environment variable management.
- **axios**: HTTP client for making requests (used for scraping).
- **cheerio**: Scraping library for parsing HTML.

---

#### **4. Set Up Environment Variables**
Create a `.env` file in the root of the project directory and add the following:
```plaintext
MONGO_URI=mongodb://localhost:27017/parking
PORT=3000
```
- Replace `MONGO_URI` with your MongoDB connection string if you’re using MongoDB Atlas.

---

#### **5. Start MongoDB**
- If MongoDB is installed locally, start the MongoDB server:
  ```bash
  mongod
  ```
- For MongoDB Atlas, ensure your database cluster is running.

---

#### **6. Seed the Database (Optional)**
You can populate the database with test data using the `seed.js` script:
```bash
node seed.js
```

---

#### **7. Scrape Parking Data**
To scrape live data from the LSU Parking website, run the `scrape.js` script:
```bash
node scrape.js
```

---

#### **8. Run the Application**
Start the application using:
```bash
node app.js
```

The application will run at: [http://localhost:3000](http://localhost:3000)

---

### **Deployment Instructions**

#### **1. Deploy to AWS EC2**
To make your application accessible online, deploy it to an AWS EC2 instance:
1. Launch an **Ubuntu EC2 instance**.
2. Install Node.js and MongoDB:
   ```bash
   sudo apt update
   sudo apt install nodejs npm mongodb-clients
   ```
3. Clone your project from GitHub:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   npm install
   ```
4. Start the application:
   ```bash
   node app.js
   ```

#### **2. MongoDB Atlas (Optional)**
If using MongoDB Atlas, replace `MONGO_URI` in your `.env` file with the Atlas connection string.

---

### **Dependencies**
Below are the major dependencies used in this project:
| Package       | Purpose                                   |
|---------------|-------------------------------------------|
| express       | Web application framework.               |
| mongoose      | MongoDB object modeling.                 |
| body-parser   | Parse incoming request bodies.           |
| ejs           | Template engine for rendering views.     |
| dotenv        | Manage environment variables.            |
| axios         | HTTP client for scraping data.           |
| cheerio       | Parse and manipulate HTML for scraping.  |

---

### **Features**
- **Database Management**: MongoDB integration for storing and querying parking lot data.
- **Web Scraping**: Dynamically scrape live data from the LSU Parking website.
- **Admin Features**: Add and delete parking lot entries via an admin interface.
- **Search and Filters**: Search by lot name or filter by availability.
- **Responsive Design**: Fully responsive using Bootstrap.

---