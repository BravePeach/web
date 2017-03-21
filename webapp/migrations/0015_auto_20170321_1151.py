# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-21 02:51
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0014_auto_20170320_1432'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.CharField(default='', max_length=300)),
                ('writer', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('offer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='webapp.GuideOffer')),
            ],
        ),
        migrations.AddField(
            model_name='accomtemplate',
            name='type_id',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='accomtemplate',
            name='guide',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='accom_templates', to='webapp.Guide'),
        ),
        migrations.AlterField(
            model_name='userrequest',
            name='published',
            field=models.BooleanField(default=True),
        ),
    ]