# MWA - Homework 09 - Mongodb 03
## Exercise
This [JSON](http://mumstudents.org/cs572/lecture09/zips.zip) file contains a list of all the zip codes in the US. Import it into your MongoDB (`mongoimport`).  
```javascript
{ "_id" : "52556", "city" : "FAIRFIELD", "loc" : [ -91.957611, 41.003943 ], "pop" : 12147, "state" : "IA" } 
```
Use the **Aggregation Framework** to write 4 different queries to:
1. Find all the zip codes in Iowa state.
```javascript
db.zips.aggregate([{
    $match: { state: "IA" } 
}, {
    $sort: {
        _id: 1
    }
}, {
    $group: {
        _id: "$state",
        zipcodes: { $push: "$_id" }
    }  
}]);
```
2. Find all the zip codes with a population less than 10,000.
```javascript
db.zips.aggregate([
    {
        $match: { pop: { $lt: 10000 } }
    },
    {
        $group: {
            _id: "populationLessThan10k",
            zipcodes: { $push: "$_id" }
        }
    }
]);
```

3. Find all cities that have more than one zip code, sort the results by state and city name.
```javascript
db.zips.aggregate([
    {
        $group: {
            _id: { state: "$state", city: "$city" },         
            count: { $sum: 1 }
        }
    }, 
    {
        $match: { count: { $gt: 1 } }
    }, 
    {
        $sort: { "_id.state": 1, "_id.city": 1 }
    },
    {
        $project: {
            _id: 0,
            state: "$_id.state",
            city: "$_id.city"
        }
    } 
]);
```

4. Display the least populated city in each state
```javascript
db.zips.aggregate([
    {         
        $group: {            
            _id: { state: '$state', city: '$city' },             
            pop: { $sum: '$pop'}         
        }     
    },      
    {         
        $sort: { pop: 1 }     
    },     
    {         
        $group: {             
            _id: "$_id.state",             
            city: { $first: "$_id.city" },             
            pop: { $first: "$pop"}         
        }     
    }, 
    {         
        $project: {             
            _id: 0,             
            state: "$_id",             
            city: "$city"         
        }     
    }, 
    {         
        $sort: {             
            state: 1         
        }     
    } 
]);
```