# rainfall
website that allows you to view photos and videos stored on your local database

ok so im just gonna type out my plans for this here and how its all gonna form together
this project is completely SELF HOSTED! you'll need to setup your own database and website to link this to, unless you just wanna steal the website i put up on here

frontend - html, css, js
backend - python(flask for api), mysql(database), apache(website), ubuntuserver(server os)

ok so for this i'm gonna try to have the database on its own machine, with another machine running apache and holding the api (im still trying to figure out the whole api thing lol)

www.rainfall.net/user1 = user opens website -> api requests thumbnails of images and videos from database endpoints specifically for thumbnails -> database recieves this request and sends them to the api -> api sends the thumbnails back to the website -> website sorts the thumbnails into month and year -> user is able to view sorted thumbnails

user clicks on a thumbnail -> api requests full resolution photo/video -> database recieves this request and sends the full res photo/video back to the api -> api sends the photo/video to the website -> endpoint is created www.rainfall.net/user1/hashedimgvidcode -> user is sent to this endpoint and is able to view the full res photo/video