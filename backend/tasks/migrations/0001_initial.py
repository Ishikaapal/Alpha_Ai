from django.contrib.postgres.operations import CreateExtension
from django.db import migrations, models
import pgvector.django

class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        CreateExtension('vector'),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('status', models.CharField(choices=[('todo', 'To Do'), ('in_progress', 'In Progress'), ('done', 'Done')], max_length=20)),
                ('embedding', pgvector.django.VectorField(dimensions=384, null=True)),
            ],
        ),
    ]
