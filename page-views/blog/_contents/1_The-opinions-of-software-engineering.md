---
title: "The opinions of software engineering"
description: "The principles and design concept that shape yLambda as a platform engineering"
date: "2022-11-26"
introduction: "Why do we build yLambda? what is the first idea which makes our decisions?"
---

## Building software is hard  

What is the most challenging for the development team nowadays? I have asked this question many times and found some items  
* Over-engineering
* Code Quality
* Infrastructure and Operating

Not many software will serve millions of users. Many of them are used by small to medium businesses. Software engineers have learned that they need to build software so that it will scale in one day; trying to predict the future which leads to over-engineering accidentally.

Writing quality code is required to understand the domain knowledge. It's trivial that software engineers will take time to learn as their business domain is new to them. This is the discovery process, which continues improving the code when they discover and is called refactoring, an iterative by thoughtful engineers.

The last one, our modern software engineering today embraces the union of Development and Operation, it's DevOps, you build it and you run it. The biggest challenge is engineers being utilized for both Development work and operation, imagine if you're writing code and someone asking for grant permissions, logging, and monitoring.

Improving code quality and over-engineering involve numerous people's minds. The Infrastructure and operation could be something we can help to solve. Let's comprehend the pain points more.

## The Ops challenges  

If you’re thinking about DevOps as building CI/CD pipelines then you’ve missed the point. During your coding time, if someone reports the issue, how long does it take the developer to get a log from the application? to get the latest errors? or see ressources consumption in the last 30 min?
Our mission is to make this answer in seconds, not minutes or hours. Developers should operate their app but should invest less time for that.

The biggest problem is so many tools that developers need to master to operate these “Ops” things: CI/CD could be in Azure, Jenkin; Monitoring is in Azure, AWS, Kubernetes; Logging in Application Insight, CloudWatch and many other tools in cloud native. 
Those skills take them away from code expertise, writing high quality code. In the end, the main thing that developers should do is technical excellence. Learning the domain, discovery and investing in quality code. That’s it!

## Our missions

At yLambda, we think that we can build a platform to take care of the “Ops” part and provide an end to end workflow for developers to embrace the DevOps and without requiring developers to learn so much about toolings.

Following us as we’re practicing the “build in public” where we open our decisions, tech stacks and other stuff to develop yLambda products.
