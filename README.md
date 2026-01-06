# Chrome Site Saver Extension

## 📌 Overview
This Chrome extension allows users to easily manage a list of websites directly from their browser.  
With a simple interface, users can:
- Enter and save custom site URLs.
- Save the site from the tab currently open.
- Delete all saved sites displayed on screen.  

All data is stored locally using **localStorage**, ensuring quick access without external dependencies.  
The project was developed using **Visual Studio Code**.

---

## 🚀 Features
- **Add Sites Manually:** Enter any site URL and save it to your list.  
- **Save Current Tab:** Quickly capture the URL of the tab you’re currently viewing.  
- **Delete All:** Clear the entire list of saved sites with one click.  
- **Persistent Storage:** Sites remain saved across sessions using localStorage.  

---

## 🛠️ Technologies Used
- **JavaScript (ES6)** – Core logic and localStorage handling  
- **HTML5** – Structure of the extension popup  
- **CSS3** – Styling for a clean and user-friendly interface  
- **Visual Studio Code** – Development environment  

---

## 📂 Project Structure
├── manifest.json    # Extension configuration
├── index.html       # Main interface
├── index.css        # Styling
├── index.js         # Logic for saving/deleting sites


---

## ⚙️ Installation
1. Clone or download this repository.  
2. Open **Chrome** and navigate to `chrome://extensions/`.  
3. Enable **Developer mode** (toggle in the top right).  
4. Click **Load unpacked** and select the project folder.  
5. The extension will now appear in your Chrome toolbar.  

---

## 🎯 Usage
1. Click the extension icon in your Chrome toolbar.  
2. Use the input field to add a site manually.  
3. Click **Save Current Tab** to store the active tab’s URL.  
4. Click **Delete All** to clear the list.  

---

## 📌 Notes
- All sites are stored in **localStorage**, meaning they are saved only on your browser and not synced across devices.  
- This extension is lightweight and designed for personal use.  

---

## 📜 License
This project is licensed under the MIT License. Feel free to use, modify, and share.  
