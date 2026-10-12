Face Recognition Attendance System

A real-time attendance system built with Python, using facial recognition to identify individuals and log their attendance in an SQLite database. The project features a simple GUI to view the attendance records.

Key Features

Face Capture: Easily capture and add new individuals to the dataset via a webcam.

Model Training: Uses FaceNet to generate high-accuracy embeddings and an SVM classifier to train the recognition model.

Real-time Recognition: Marks attendance in real-time using a live webcam feed.

Database Logging: All attendance records are saved to an SQLite database with student name, date, and time.

Attendance Viewer: A simple Tkinter GUI application to view all attendance records from the database.

Technology Stack

Python 3

OpenCV: For real-time video capture and image processing.

MTCNN: For accurate face detection during the capture phase.

Keras-FaceNet: For generating 128-d face embeddings.

Scikit-Learn: For the Support Vector Machine (SVM) classifier.

SQLite3: For the database to store attendance logs.

Tkinter: For the graphical attendance viewer.

Project Structure

Face_Attendance_System/
│
├── dataset/                # Stores captured face images (e.g., /dataset/JohnDoe/)
├── models/                 # Stores the trained model (.pkl) and label encoder (.pkl)
├── attendance/
│   └── attendance.db       # SQLite database file
│
├── src/
│   ├── capture_faces.py        # Run to add new users to the dataset
│   ├── train_model.py          # Run to train the recognizer on the dataset
│   ├── recognize_faces.py      # Run for live recognition and attendance marking
│   ├── database_handler.py     # Module for all database operations
│   ├── attendance_ui.py        # Run to view the attendance log in a GUI
│   └── view_attendance.py      # (Legacy) Text-based attendance viewer
│
├── requirements.txt        # All Python dependencies
└── README.md


Setup and Installation

Follow these steps to set up and run the project.

1. Clone the Repository

git clone [https://your-repository-url.git](https://your-repository-url.git)
cd Face_Attendance_System


2. Create and Activate a Virtual Environment

It is highly recommended to use a virtual environment.

# Create the environment
python -m venv face_env

# Activate the environment
# On Windows
face_env\Scripts\activate
# On macOS/Linux
source face_env/bin/activate


3. Install Dependencies

Install all required libraries using the requirements.txt file.

pip install -r requirements.txt


How to Run the System

Run the scripts from your project's root directory (Face_Attendance_System/).

Step 1: Capture Face Images

Run this script for each person you want to add. You must add at least two different people to the dataset for the model to train.

python src/capture_faces.py


Enter the person's name when prompted (e.g., JohnDoe).

Step 2: Train the Recognition Model

Once you have added face images for at least two people, run the training script. This will process the images and save the faces_recognition.pkl and label_encoder.pkl files into the models/ folder.

python src/train_model.py


Step 3: Run the Live Attendance System

This script will open your webcam, recognize registered faces, and log their attendance in the attendance.db file.

python src/recognize_faces.py


Press 'q' to quit the live feed.

Step 4: View the Attendance Log

To see who has been marked present, run the GUI application.

python src/attendance_ui.py


This will open a window displaying all records from the database. Click the "Refresh Data" button to load new entries.
