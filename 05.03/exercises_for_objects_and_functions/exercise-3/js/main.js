function createUserObj(firstName, lastName, tzNumber) {
  const user = {};
  user.fName = firstName;
  user.lName = lastName;
  user.tzNum = tzNumber;

  return user;
}

const UsersArr = [];

do {
  const FirstName = prompt("Please enter your first name:").toLowerCase();
  const LastName = prompt("Please enter your last name:").toLowerCase();
  const TeudatZeutNum = +prompt(
    "Please enter your 3-digit Teudat Zeut number:"
  );

  const UserObj = createUserObj(FirstName, LastName, TeudatZeutNum);
  UsersArr.push(UserObj);
} while (confirm("Do you wish to add another user?"));

const UsersArrSortedByFirstName = UsersArr.slice();
const UsersArrSortedByLastName = UsersArr.slice();
const UsersArrSortedByTzNum = UsersArr.slice();

console.log(
  "Sorted by first names:\n" +
    UsersArrSortedByFirstName.sort((p1, p2) =>
      p1.fName > p2.fName ? 1 : p1.fName < p2.fName ? -1 : 0
    )
);
console.log(
  "Sorted by last names:\n" +
    UsersArrSortedByLastName.sort((p1, p2) =>
      p1.lName > p2.lName ? 1 : p1.lName < p2.lName ? -1 : 0
    )
);
console.log(
  "Sorted by Teudat Zeut number\n" +
    UsersArrSortedByTzNum.sort((p1, p2) =>
      p1.tzNum > p2.tzNum ? 1 : p1.tzNum < p2.tzNum ? -1 : 0
    )
);

// let isGoodToGo = true;

// while (confirm("Do you wish to add another user?")) {
//   const FirstName = prompt("Please enter your first name:");
//   const LastName = prompt("Please enter your last name:");
//   const TeudatZeut = prompt("Please enter your Teudat Zeut number:");

//   const user = {};
// }
