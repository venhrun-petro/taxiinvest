---
title: Technologies for Tracking Security Guards
tags: ["BLOG", "Analytics"]  
date: 2015-12-15T16:59:35-04:00 
img: img/blog/Big/Technologies_for_Tracking_Security_Guards.jpg
small_img: img/blog/Small/Technologies_for_Tracking_Security_Guards.jpg
paragraph: So you want to track your guards? We look at all the technolgies that are relevant to your security guard company.
---

Technology is changing our world. But which technologies are right for you, your business and your customers? In this article, I am going to explore the advantages and challenges associated with common technologies used in smartphone based guard tour systems for tracking security officer locations and activity.

#### Global Positioning System (GPS)
The technology that springs to mind when discussing tracking, smartphones and maps is GPS. If you own a smart phone, you are familiar with GPS because of applications like Google Maps. What most people do not know is that GPS is only one of the technologies that your phone is using to provide your exact location. Your phone also uses cell tower triangulation and Wi-Fi to supplement GPS. While GPS provides the most accurate depiction of your location, these other technologies are critical to complete the picture when satellite access is not an option.

The advantage of GPS is that it provides an accurate location, down to within a few meters, anywhere in the world. In a previous blog post, I explored GPS accuracy and tried to understand the raw data gathered from GPS. Because the data is “noisy” it needs to be post processed to achieve better accuracy.

There are still some challenges when it comes to relying on GPS. Most people forget that accurate positions are only possible when you are outside and have an unobstructed view of the sky. GPS does not work indoors and accuracy can decrease around tall buildings and trees.

Another challenge with running GPS on your phone is that it drains a significant amount of battery. Most applications attempt to mitigate this by preventing automatic fixes from being taken too frequently, but this doesn’t always help. There is a definite trade-off between power use and the accuracy of a security officer’s route. To help extend battery life, you can modify the rate at which you sample, based on the speed that the GPS is going or the activity that the phone detects.

#### Quick Response (QR) Codes
QR codes are matrix or two dimensional bar codes. A smartphone camera can be used to read QR codes for tracking if you associate each QR code with a location. QR codes are simple and cheap to produce and they can be printed on most modern printers.

Unfortunately, it is very easy to copy or fake a QR code. You simply print one with the same value or even photocopy it. Another challenge is that you will need to use some other mechanism to find the exact latitude and longitude of the QR code before it is useful for positioning. QR Codes provide no data regarding movement, route coverage or speed in between scans.

#### Radio-Frequency Identification (RFID) Tags
RFID tags are Near Field Communication (NFC) devices that can be read by certain Android phones. These are short range devices that need the phone to be no more than 4cm (1.5 inches) from them to initiate a connection. They come in many sizes and shapes but are generally around 1 inch square and are mostly flat. Most RFID tags used are passive and therefore need no power source. Like QR codes, they can be associated with a specific fixed position.

Unlike QR codes, an RFID tag cannot be easily copied. In fact, many contain unique codes that cannot be overwritten and therefore cannot be copied at all. This provides a clear advantage over QR codes.

RFID tags are more expensive than QR codes and can only be read by phones that have the correct hardware. Like QR codes, you need to know the exact location of the tag to make it useful.

#### Wi-Fi
Wi-Fi routers can be used outdoors by the phone to check against a database of known routers. Each router has limited range, so this gives a rough idea of the location of your phone. While indoors, more subtle techniques which rely on signal strength can be used to help further pinpoint the phone’s position.

The clear advantage of leveraging Wi-Fi is that no new hardware is required as existing Wi-Fi infrastructure is prevalent throughout most populated areas where GPS may struggle to acquire a reliable signal, for example in the city.

Depending on the use case, there are some different challenges associated with using Wi-Fi for tracking. For coarse grain location, Wi-Fi relies on a public database of locations that could be inaccurate and is at best approximate. For finer grained pinpointing, some level of manual configuration is often needed to measure actual signal strengths and map them to positions in the real world.

#### Bluetooth Low Energy (BLE)
BLE devices are powered beacons that can be used to find the proximity of a smartphone. There are a number of standards available such as Apple’s iBeacon and Google’s Eddystone. It is possible for a phone to use multiple standards to acquire a position relative to the beacons in close proximity.

The advantage of BLE is it that allows for accurate indoor positioning. There are however a number of challenges with BLE. This is a new technology and is not yet well supported. To use BLE, you will need to install powered beacons around your location and manage them. The technology is short range and is best suited for indoors for tracking purposes though BLE can be used outdoors in other ways.

#### Final Take-Away
The reality is that no single technology will allow accurate tracking in all circumstances. When outdoors, we get this from GPS or courser grained technologies such as cell tower triangulation. When indoors we can use Wi-Fi or BLE for general area tracking and QR codes or RFID tags to see if specific locations have been visited. Only by using a variety of methods can we generate an accurate picture of who, what, when, where and how as it pertains to the activities of mobile workers like security officers.