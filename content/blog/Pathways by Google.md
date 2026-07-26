---
title: "New Gen AI Architecture – Pathways by Google"
date: "2021-10-29"
excerpt: "A look at Google's Pathways architecture — a next-generation AI system built to move models from single-task to multi-task, single-sense to multi-sense, and dense to sparse computation."
source: "linkedin"
externalUrl: "https://www.linkedin.com/pulse/new-gen-ai-architecture-pathways-google-balayogi-g"
---

## What is Pathways architecture?

Pathways architecture is a new AI architecture mainly designed to overcome current machine learning and computer science research limitations. In their blog post, Google addressed the current limits of ML systems and how this new-gen architecture can solve those problems.

## Advantages of Pathways architecture

**1. The single thing to many things**

Current AI models are trained on single tasks — image classification, object detection, sentiment analysis, and so on. With the Pathways architecture, ML models can be trained on various things. Google gave the example of detecting landscape elevation from aerial images: the flood flow pattern can be learned with the same task. One of the motivations of the architecture is to design a model with different capabilities.

**2. One sense to multiple senses**

Most ML models are trained on a single sense. Humans have five senses (vision, audio, touch, smell, and taste). The aim is to build a multi-modal system trained on different senses. For example, training an ML model on an image (a dog), audio (the dog barking), and video (the dog running) increases the learning generalization of the machine learning system.

**3. Dense and inefficient to sparse and efficient**

The final part of the blog covers neural networks. Most neural networks need to be fully activated to accomplish a single task, so energy consumption is high. As the name suggests, Pathways introduces pathways — like the pathways in human brains — where each path is specified for a particular task. Sparse neural networks can be used to achieve efficient computation over dense networks.

## References

1. [Introducing Pathways: A next-generation AI architecture](https://blog.google/technology/ai/introducing-pathways-next-generation-ai-architecture/)
2. [The case for sparsity in neural networks, part 2: dynamic sparsity](https://numenta.com/blog/2020/10/30/case-for-sparsity-in-neural-networks-part-2-dynamic-sparsity)