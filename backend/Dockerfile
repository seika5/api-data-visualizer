# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Install build dependencies
RUN apt-get update && apt-get install -y gcc

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install any necessary dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the current directory contents into the container at /app
COPY . .

# Run tests
RUN python manage.py test || exit 1

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Run the Django server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
