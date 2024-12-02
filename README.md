
---

## **Parking Availability Application**

### **Setup Instructions**

#### **1. Prerequisites**
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) or **MongoDB Atlas** for cloud-hosted MongoDB.
- [Git](https://git-scm.com/) (optional).

---

#### **2. Clone the Repository**
Clone the project and navigate into the folder:
```bash
git clone <repository-url>
cd <repository-folder>
```

---

#### **3. Install Dependencies**
Install the required packages:
```bash
npm install
```

---

#### **4. Set Up Environment Variables**
Create a `.env` file and configure the following:
```plaintext
MONGO_URI=mongodb://localhost:27017/parking
PORT=3000
```

---

#### **5. Start MongoDB**
Start the MongoDB server locally: optional
```bash
mongod
```
If using MongoDB Atlas, ensure your cluster is running and update `MONGO_URI` in `.env`.

---

#### **6. Seed or Scrape Data**
To populate the database with parking data, choose one of the following:

**Option 1: Seed Test Data**
```bash
node seed.js
```

**Option 2: Scrape LSU Parking Data**
```bash
node scrape.js
```

---

#### **7. Run the Application**
Start the server:
```bash
node app.js
```

Visit the application in your browser:
[http://localhost:3000](http://localhost:3000)

---

### **Commands for Testing**
- Start MongoDB: optional
  ```bash
  mongod
  ```
- Seed Data:
  ```bash
  node seed.js
  ```
- Scrape Data:
  ```bash
  node scrape.js
  ```
- Start the Application:
  ```bash
  node app.js
  ```

---

### **Features**
- **Filter by Day, Lot Name, and Availability**.
- **Admin Interface**: Add or delete parking lot data.
- **Responsive Design** with search and filter functionality.

---

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