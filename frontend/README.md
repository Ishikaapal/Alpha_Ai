# 📝 Dockerized Full Stack Task Management App

A **full-stack task management web application** built using **React (Frontend)** and **Django REST Framework (Backend)**. This app allows users to **create, update, delete, and filter tasks**, with features like modals, toasts, and vector search using **pgvector** and **Sentence Transformers** for semantic similarity.

---

## 🚀 Features

- ✅ Create, update, delete tasks
- 🗃️ View tasks in cards/table format
- 📂 Filter tasks by status
- ✏️ Edit task in modal
- 🗑️ Confirm before delete
- 🔍 Vector-based semantic task search
- 📦 Dockerized for easy setup
- 💾 Caching using `localStorage`
- 🔔 Notifications with `react-toastify`

---

## 🧰 Tech Stack

### 🔙 Backend
- Python 3
- Django 5
- Django REST Framework
- PostgreSQL + pgvector extension
- Sentence Transformers (`all-MiniLM-L6-v2`)
- Docker

### 🔜 Frontend
- React.js
- Axios
- Tailwind CSS
- React Toastify
- React Modal

---

## 📸 Screenshots

> (You can replace these with real screenshots or generated mobile previews)

| Home Page | Add/Edit Task | Task List |
|-----------|---------------|------------|
| ![Home](screenshots/home.png) | ![Form](screenshots/form.png) | ![List](screenshots/list.png) |

---

## 🛠️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/Ishikaapal/Alpha_Ai.git
cd taskapp
