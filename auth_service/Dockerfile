FROM python:3.11.3
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app
RUN mkdir /app/staticfiles

COPY ./auth_service/requirements.txt ./requirements.txt
#RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt
COPY ./auth_service /app

RUN sed -i 's/\r$//g' ./entrypoint
RUN chmod +x ./entrypoint

RUN sed -i 's/\r$//g' ./start_django
RUN chmod +x ./start_django

ENTRYPOINT [ "/app/entrypoint" ]

