# CI/CD Reflection

## Purpose of CI/CD  

CI/CD (Continuous Integration and Continuous Deployment) is all about making  
the development process smoother and more reliable.  

CI ensures that whenever new code is pushed, it gets automatically tested  
and integrated into the existing codebase. This helps catch issues early  
before they become bigger problems.  

CD takes it a step further by automating the deployment process, making sure  
new changes can be safely released to production without manual effort.  

## How does automating style checks improve project quality?  

Automating style checks ensures that all code follows a consistent format,  
making it easier to read and maintain.  

When multiple developers are working on the same project, having a  
standardised style helps avoid confusion and unnecessary reformatting.  

## What are some challenges with enforcing checks in CI/CD?  

- **False positives and negatives**: Sometimes, linting tools or style  
  checks might flag things that aren’t actually issues, or miss real  
  problems. This can be frustrating and time-consuming.  
- **Setup and configuration**: Getting CI/CD tools to work properly with a  
  project can take some effort, especially when dealing with different  
  dependencies and configurations.  
- **Slower development workflow**: Running automated checks, especially in  
  large projects, can slow down development if they aren’t optimised.  
  Developers might need to wait for tests or fixes before pushing code.  

## How do CI/CD pipelines differ between small projects and large teams?  

For small projects, CI/CD tends to be fairly straightforward – usually just  
some basic tests and checks to make sure everything runs smoothly.  

Developers have more flexibility to adjust things on the fly, and there’s  
less overhead in managing the pipeline.  

In larger teams, CI/CD gets a lot more complex. There are often multiple  
stages, including automated testing, security checks, and deployment  
approvals.  

The pipeline needs to be carefully managed to avoid issues, and tools are  
often integrated with other systems like issue tracking or monitoring  
services.  

Large teams also need to enforce stricter coding standards and permissions  
to maintain consistency across different contributors.
