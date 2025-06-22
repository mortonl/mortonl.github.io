---
title: What DevEx Means To Me
date: 2025-06-21 09:00:00 +/-TTTT
categories: [SOFTWARE-PRACTICES, DEVEX]
tags: [devex]     # TAG names should always be lowercase
description: What Developer Experience (DevEx) Means to Me
author: mortonl
toc: true
pin: true
---

## What Developer Experience (DevEx) Means to Me

For years, I’ve been trying to stay aligned and ensure coordination between teams and departments who need to work together, not just for delivering new software product features but for running and supporting them when in production. But it wasn’t always this way.

Early in my career, my focus was purely on building software: I’d write code, publish artifacts to Nexus, and hand things over to someone else to deploy. It was a classic “Dev” role—build it, ship it, and move on. That changed when I started taking on-call responsibilities. Suddenly, I was not just building software, but also monitoring it in production, handling incidents both during the day and on my scheduled on-call shifts. I began to appreciate the importance of operational excellence—how systems behave in the wild, how to respond to issues quickly, and how to design for reliability. This was my introduction to the “Ops” side of DevOps.

A few years after joining Hermes (now Evri), I became a Squad Lead (Lead Developer). This role meant I had to become more responsible for our team’s output and delivery. I helped contribute to the initial designs of our new website platform, and we began the significant journey of moving all our software to the cloud (AWS). This involved both rewriting some systems from scratch and performing a structured migration of existing software out of a German data centre and into AWS Ireland. This period was pivotal for me, as it required a broader perspective and a deeper sense of ownership—not just for code, but for the entire lifecycle and reliability of our products.

As part of the move to AWS, another team had created a pipeline using boto3 and Concourse, but it was hard to work with and didn’t fit our established workflows. We already had well-established Jenkins instances that weren’t going anywhere, and at the time, we had a DevOps team. I wanted to create a pipeline that was less haphazard and actually designed with the wider department’s use cases in mind.

The steer from DevOps and leadership was that we could use whatever tools from the technology menu to deploy our code to AWS—at our own risk. This included the use of the `common-build-scripts` repo, which was helpful for creating and tearing down AWS environments, but it wasn’t officially supported and there was a risk of knowledge loss if its creator left.

We were empowered as a team and trusted to choose the best tool for each task. We chose Jenkins up front because more people were familiar with it, and our initial spike found Concourse hard to work with. Over time, we leveraged more Jenkins functionality that wasn’t available out of the box in Concourse, such as:

- Automatically generating pipelines for each feature branch (manual in Concourse)
- Building and running Docker images for behavior tests as part of the build (not possible in Concourse’s model)
- Running our test suite in parallel via the Maven Surefire plugin (not supported in Concourse)
- Using Jenkins plugins for easy integration with Slack, GitLab, and more

While we remained open to other tools and to revisiting Concourse in the future, Jenkins allowed us to get our deployments working and deliver value quickly, with any migration or tool change becoming future technical debt to address after beta.

This experience resulted in my first foray into developing custom pipelines and pipeline libraries in Jenkins—and I found I really enjoyed it.

Security has always been an area of keen interest for me. Years ago, before some of the more advanced practices we have today, I introduced OWASP Dependency Check into our Maven build processes. It was a step forward, but as our needs grew, it became cumbersome to manage. Around that time, one of my contractor colleagues, David Moss, created a Hermes-hosted version of OWASP Dependency Track as a proof of concept. While it was a bit ahead of its time for us—since we hadn’t yet integrated it with our pipelines—it was a great tool. A few years later, I helped resurrect that work and fully integrated Dependency Track into our pipeline libraries, bringing security scanning into our standard delivery process. At this point, we had evolved into a more DevSecOps-aligned function.

Becoming a Technical Architect gave me the freedom to step back from the day-to-day and look at the bigger picture. As a cost-oriented company, Evri began to focus more on cloud infrastructure spend. My colleagues and I, as Technical Architects, regularly review cloud costs, ensure they’re properly attributed, and look for opportunities to optimise or eliminate unnecessary spend. This has added a “FinOps” dimension to our work, making me a true DevSecFinOps practitioner.

At Evri, I spent a long time advocating for a dedicated Platform/DevEx team, believing that improving the day-to-day lives of engineers is one of the most impactful things we can do for an organisation.

When the opportunity finally came to help shape this new squad, I jumped at the chance. My background—having written the original pipeline library back in 2018 and being recognised as a go-to person for tools like Maven and Jenkins—meant I could hit the ground running. Our mission was clear: boost the velocity and quality of code and feature delivery across the entire engineering function.

### The Journey: From Advocacy to Action

My secondment to the DevEx team was both a challenge and a privilege. I wasn’t just there to write code—I was there to help set the vision, mentor others, and drive real change. Here’s a flavour of what that looked like in practice:

- **Support & Mentorship:** I worked closely with our Lead DevEx Engineer, providing guidance and support as we navigated new territory together.
- **Research & Innovation:** I constantly explored new ideas and shared them with the team, always looking for ways to make developers’ lives easier.
- **Alignment & Strategy:** I made sure our efforts were aligned with the wider Architecture team, helping to shape strategies, standards, and policies that would have a lasting impact.
- **Tool Enhancements:** I introduced and improved tools like Mend Renovate for dependency management, making it easier to keep our codebases healthy and up-to-date.
- **GitLab Settings Standardisation:** I implemented a nightly process using GitLabForm to ensure our project settings stayed consistent and secure.
- **Developer Portal:** I built a proof-of-concept internal developer portal using Backstage, giving engineers a single place to discover and access the tools and documentation they needed.
- **DevOps Tooling:** I helped automate the maintenance of Jenkins and other critical tools, reducing manual toil and freeing up time for more valuable work.

### Pipeline Enhancements: Raising the Bar

One of the most rewarding aspects was enhancing our Jenkins Pipeline Library. Using Groovy, TypeScript, CDK, and Java, I delivered features that made a real difference, including:

- Identifying reference builds and associated commits with the Git Forensics plugin.
- Implementing quality gates using Jenkins Warnings Next Generation and Git Forensics.
- Automatically commenting on merge requests for code violations.
- Parsing warnings and generating standardised summary comments on merge requests.
- Generating and aggregating SBOMs, then publishing them to Dependency Track.
- Integrating with AppDynamics to publish deployment events.
- Maintaining around 90% unit test coverage to ensure reliability.
- Publishing tags to GitLab projects during deployments.
- Signing commits with GPG for added security.
- Adding badges to pipeline runs for better visibility.
- Creating several new pipelines from scratch to support evolving needs.

---

### Reflections

Looking back, my time with the DevEx team reinforced my belief that developer experience is about more than just tools—it's about culture, collaboration, and continuous improvement. By investing in DevEx, we empower engineers to do their best work, which ultimately drives better outcomes for the business and our customers.

If you’re passionate about making a difference in your engineering organisation, I encourage you to champion DevEx. The impact is real, and the journey is
