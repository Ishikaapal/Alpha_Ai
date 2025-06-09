from django.db import models

class Task(models.Model):
    STATUS_CHOICES = [
        ("todo", "To Do"),
        ("in_progress", "In Progress"),
        ("done", "Done"),
    ]
    title = models.CharField(max_length=100)
    description = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)

    def __str__(self):
        return self.title
