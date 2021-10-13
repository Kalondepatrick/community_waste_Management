A submission to Mzuzu E-Hub Hackathon

# Problem Statement

The Malawi State of Environment report (2010) indicates that objective decision making in environmental management is being challenged by lack of accurate and updated data on the state of the environment in Malawi. One major explanation for dearth in data resource is lack of monitoring systems and institutions to monitor implementation of environmental activities. To help addressing the problem, we are developing a Waste Management Monitoring System that will make use of data from multiple sources. The project is inspired by community projects from Lilongwe where a voluntary youth group – Youth for Environmental Development (YED) – utilized citizen science to monitor unlawful waste disposal practices, coverage of waste collection programs and community cleanup projects in one of Lilongwe City's peri urban communities.  

The maps for unlawful waste disposal from Lilongwe City highlighted that urban communities commonly treat open and public spaces such as roadsides and river channels as dumping locations. Maps for waste collection service clearly highlight sections of the community covered most and those covered least by the service. We hope such maps offer great opportunities for improvement and programming of interventions that can help addressing the problem. We have deliberately made this project open so as to get as much support from like minds as we can.

<p align="center">
  <img height="500" src="https://github.com/Kalondepatrick/community_waste_Management/blob/main/image.jpeg">
</p>

# Context

In Malawi, the issue of waste management has attracted political support.  The President of the Republic of Malawi, Dr Razarus Chakwera declared that every second friday of the month to be dedicated to clean up activities. The impact of such waste clean up activities is curently unknown but most of the clean ups have been done in the major cities. Malawi has four major cities: Lilongwe (capital city), Blantyre (commercial city), Zomba (old capital city) and Mzuzu. Waste disposal issues have been reported in all the cities. We are working with Youth for Environmental Development in Lilongwe, Mr Manota Mphande of Clean Mudi River project for Blantyre, and Mzuzu E-hub for Mzuzu. We do not have any current connections with the city of Zomba, but we would be glad if we establish such connection. 

# Practical Significance

The current project presents a prototype of a dashboard that will help different stakeholders in planning and improving their commitments in reducing their ecological footprint and/or support communities to do the same. Our suggested monitoring system will help to understand the extent through which current interventions such as Private Waste Collection Services are making the difference. We are also confident that current project provide opportunities to ensuring that there is equitable provision of municipal services to Malawian citizens. Our system will greatly support city councils programs. With our system, city councils will be able to identify areas within the city where illegal dumping is common. Also, they will be able to identify locations within the city where waste collection services are the least. Not only will all these help city councils to prioritize waste management programs but will also bring transparency in public service delivery that will help to justify future budget allocations and need to increase budgetory support. Also by showing what is currently being done, non-profit organization will be able to identify areas that need more support and this will reduce duplication of effort. 

# Data Resources

The dashboard uses multiple data sources. We are intergrating data from the following sources:
- Human population from Malawi National Statistical Office
- Waste disposal from open Litter Maps (OLM) and data from an ODK survey that we created for monitoring Mudi river.
- Admistration boundaries from Malawi Spatial Data Platform (MASDAP) 
- Private Waste Collection (From Youth for Environmental Development)

We also intend to integrate data from social media (Based on previous cleanup campaigns). 

# How it works

The dashboard takes data on unlawful waste disposal and waste collection from OLM and ODK surveys. Data is then prepared and stored on cloud using ArcGIS online. ArcGIS online follow a robust and effective security framework. The data is pulled from ArcGIS online to authorized outlets (in this case our github page). Every friday, all contributions on OLM will be synced into our dashboard together with contributions from authorized ODK surveys. This will provide near-real time information about waste management in the city in terms of extent of unlawful waste dumping and waste collection. In the future, we will also include capabilities to collect data using social media (Twitter and Facebook). 

# Key insights and next step

Disclaimer. Our solution should not be assumed to be a perfect solution to addressing the problem of waste. Addressing the problem of waste in cities will require far beyond what the current solution is offering - strenghening monitoring of waste management. To address the problem of waste, there will be a need for developing effective waste collection system, investing in waste handling (including recycling) and behavioral changes among the general population. We are interested to explore opportunities through which our proposed monitoring system can accelerate progress in all such aspcects of waste management. We know for sure that our system is key towards enhancing adaptive management in such processes. 

Our next step will involve, developing an understanding of  the influence of number of homes in close proximity to dumpsites on quantities of waste. We would also like to study other variables that might be statistically important. We are thinking of establishing partenerships with academic and research institutions to strenghten this.

You can check out our prototype here: https://kalondepatrick.github.io/community_waste_Management/

Feedback and comments can be sent to: operations.yed@yahoo.com 
