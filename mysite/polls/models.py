from django.db import models
import jsonfield
# Create your models here.

class Products(models.Model):

    _id = models.IntegerField(null = False)
    title = models.CharField(null = False, max_length=50)
    vendor = models.CharField(null = False, max_length=50)
    variants = jsonfield.JSONField()
    # class Meta:
    #     verbose_name = _("")
    #     verbose_name_plural = _("s")

    def __str__(self):
        return self.vendor 

    def get_absolute_url(self):
        return reverse("_detail", kwargs={"pk": self.pk})
