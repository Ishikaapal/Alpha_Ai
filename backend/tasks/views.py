from rest_framework import viewsets
from .models import Task
from .serializers import TaskSerializer
from sentence_transformers import SentenceTransformer

model = SentenceTransformer('all-MiniLM-L6-v2')

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def perform_create(self, serializer):
        desc = self.request.data.get("description", "")
        embedding = model.encode(desc).tolist()
        serializer.save(embedding=embedding)

    def perform_update(self, serializer):
        desc = self.request.data.get("description", "")
        embedding = model.encode(desc).tolist()
        serializer.save(embedding=embedding)
