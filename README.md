A submission to Mzuzu E-Hub Hackathon

# Problem Statement

The Malawi State of Environment report (2010) indicates that objective decision making in environmental management is difficult because of lack of accurate and updated data on the state of the environment in Malawi. One major explanation for dearth in data resource is lack of monitoring systems and institutions to monitor implementation of environmental activities. To address the problem, we are developing a monitoring system that will use data from multiple sources. The project is inspired by a community project from Lilongwe where a voluntary youth group – Youth for Environmental Development (YED) – utilized citizen science to monitor waste disposal in a small community of approximately 310 households.  

The maps from Lilongwe City highlighted that waste is commonly disposed in rivers and along roadsides. Such maps offer opportunities for programming of interventions and programs that can address the problem. We have deliberately made this project open so as to get as much support from like minds as much as we can.

<p align="center">
  <img height="500" src="https://github.com/Kalondepatrick/community_waste_Management/blob/main/image.jpeg">
</p>

# Context

In Malawi, the issue of waste management has attracted political support.  The President of the Republic of Malawi Dr Razarus Chakwera declared that every second friday of the month to be dedicated to clean up activities. The impact of such waste clean up activities is curently unknown but most of the clean ups have been done in the major cities. Malawi has four major cities: Lilongwe (the capital), Blantyre (commercial city), Zomba (old capital) and Mzuzu. Waste disposal has been reported in all the cities. We are working with Youth Environmental Development in Lilongwe, Mr Manota Mphande of Clean Mudi River for Blantyre and Mzuzu E-hub for Mzuzu. We do not have any current connections with the city of Zomba, but we would be glad if we establish such connection. 

# Practical Significance

The current project presents a prototype of a dashboard that will help different stakeholders in planning and improving their commitments in reducing their ecological footprint and/or support communities to do the same. Our suggested monitoring system will help to understand the extent through which current interventions such as Private Waste collection are making the difference, plus also showing opportunities to ensure that there is equitable provision of municipal services to Malawian citizens. By using our system, city councils will be able to demostrate how they are spending public finances, and this will help to justify future budget allocations and need to increase budgetory support. Also by showing what is currently being done, non-profit organization will be able to identify areas that need more support and this will reduce duplication of effort. 

# Data Resources

The dashboard uses multiple data sources. We are intergrating data from the following sources:
- Human population from Malawi National Statistical Office
- Waste disposal from open Litter Maps (OLM) and data from an ODK survey that we created for monitoring Mudi river.
- Admistration boundaries from Malawi Spatial Data Platform (MASDAP) 
- Private Waste Collection (From Youth for Environmental Development)

We also intend to integrate data from social media (Based on previous cleanup campaigns). 

# How it works

The dashboard takes data on waste disposal from OLM and ODK surveys, it is prepared and stored on cloud using ArcGIS online. ArcGIS online follow a robust and effective security framework. The data is pulled from ArcGIS online to authorized outlets (in this case our github page). Every friday, all contributions on OLM will be synced into our dashboard together with contributions from authorized ODK surveys. This will provide near-real time information about waste management in the city interms of dumpsites and waste collection. In the future, we will also include capabilities to collect data using social media (Twitter and Facebook). 

# Key insights and next step

Disclaimer. Our solution should not be assumed to be a perfect solution to addressing the problem of waste. Addressing the problem of waste in cities will require far beyond what the current solution is offering - strenghening monitoring of waste management. To address the problem of waste, there will be a need for developing effective waste collection system, investing in waste handling (including recycling) and behavioral changes among the general population. We are interested to explore opportunities through which our proposed monitoring system can accelerate progress in all such aspcects of waste management. We know for sure that our system is key towards enhancing adaptive management in such processes. 

Our next step will involve, developing an understanding of  the influence of number of homes in close proximity of homes to dumpsites on quantities of waste. We would also like to study other variables that that might be statistically important. We are thinking of establishing partenerships with academic and research institutions to strenghten this.

You can check out our prototype here: https://kalondepatrick.github.io/community_waste_Management/

Feedback and comments can be sent to: operations.yed@yahoo.com 
