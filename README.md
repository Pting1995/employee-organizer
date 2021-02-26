# Employee Organizer

## Description
This app helps you keep your employees organized! Right now it uses an API to generate 15 random people with images, first and last names, phone numbers, emails, and date of births. Right now you can sort by name, phone number, email, and date. Alternatively you can search by typing in the employee's name in the "Employee Search" form. It will dynamically filter though your employees with the string you input into the form. I designed it so that incase your employees share first names, they can still be searched with first and last names!

## Preview of Working Site

![Image](./employee-organizer-project/public/images/employee-organizer-1400x700-demo.gif)

## Deployed Link

* [See Live Site](https://pting1995.github.io/employee-organizer/)

## Code Snippet
The code below shows how the app sorts though names alphabetically! It makes a temporary array to hold the users list, then sorts it, and then saves the new user list!

``` JavaScript
if (dataVal === "sortName") {
      var tempArr = [];
      tempArr = [...users];
      tempArr = tempArr.sort((a, b) => (a.fullname > b.fullname) ? 1 : -1);
      setUsers(tempArr);
    }
```

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JS](https://www.javascript.com/)
* [GitHub](https://github.com/)
* [Git](https://git-scm.com/)
* [node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [react](https://reactjs.org/)
* [react-dom](https://reactjs.org/docs/react-dom.html)
* [react-scripts](https://www.npmjs.com/package/react-scripts)
* [axios](https://www.npmjs.com/package/axios)
* [gh-pages](https://pages.github.com/)
* [Web Vitals](https://web.dev/vitals/)
* [Random User API](https://randomuser.me/)

## Authors

* **Peter Ting**

- [Link to Portfolio](https://portfolio-mk3.herokuapp.com/)
- [Link to Github](https://github.com/Pting1995)
- [Link to LinkedIn](https://www.linkedin.com/in/pting002/)