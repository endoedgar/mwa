# MWA - Homework 11 - Angular 01
## Exercise
1. Create a new Angular application from CLI.
2. From the CLI, create a flat component class Counter that has one property `counterValue=0`, with inline template and style.
3. The component template should have two buttons and variable bound to the `counterValue` property, when the user clicks on `"-"` or `"+"` buttons the `counterValue` should decrease/increase and the user must see the change.
4. Use this component in `AppComponent` and test if everything is working properly.
  
**Update the `Counter` Component:**  
1. Create an `Input` for a property counter, so if the parent component sets its value we will change `counterValue`.
2. Create an `Output` counterChange, that emits the current value at all times so the parent component can read the value of `counterValue`.
3. Update your `"-"` and `"+"` methods to reflect the change of `counterValue` to counter.
  
**Update the `AppComponent`:**  
1. Create a property `ChildCounterValue` and bind/pass this to your `Counter` component `Input`.
2. Listen to any change of `counterChange` and reflect the change to `ChildCounterValue`.
3. Bind `ChildCounterValue` in the Template and verify it works
  
**Add more than one counter component into your `AppComponent` and notice how each one has its own state.**  
  
![Counter](http://www.mumstudents.org/cs572/lecture12/counter.png)
