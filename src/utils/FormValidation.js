export const AddRegisterValidator = (user, phone) => {
  const errors = {};
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;

  if (!user.email) {
    errors.email = "Email is required";
  } else if (!regex.test(user.email)) {
    errors.email = "Please Enter a valid Email";
  }
  if (!user.password) {
    errors.password = "Password is required";
  }
  if (!user.confirmPassword) {
    errors.confirmPassword = "Password is required";
  } else if (user.password !== user.confirmPassword) {
    errors.confirmPassword = "Passwords do not not Match";
  }
  if (!user.firstName) {
    errors.firstName = "First name is required";
  }
  if (!user.lastName) {
    errors.lastName = "First name is required";
  }
  if (!phone) {
    errors.phone = "Phone number is required";
  }
  if (!user.street) {
    errors.street = "Street is required";
  }
  if (!user.streetNumber) {
    errors.streetNumber = "Street number is required";
  }
  if (!user.city) {
    errors.city = "City is required";
  }
  if (!user.state) {
    errors.state = "State is required";
  }
  if (!user.postCode) {
    errors.postCode = "Postal code is required";
  }
  if (!user.country) {
    errors.country = "Country is required";
  }
  return errors;
};

export const AddUserValidator = (userLogin) => {
  const errors = {};
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
  if (!userLogin.email) {
    errors.email = "Email is required";
  } else if (!regex.test(userLogin.email)) {
    errors.email = "Please Enter a valid Email";
  }
  if (!userLogin.password) {
    errors.password = "Password is required";
  }
  return errors;
};

export const AddDogValidator = (dog) => {
  const errors = {};
  if (!dog.dogImage) {
    errors.dogImage = "Dog image is required";
  }
  if (!dog.ownerName) {
    errors.ownerName = "Owner name is required";
  }
  if (!dog.kennelName) {
    errors.kennelName = "Kennel name is required";
  }
  if (!dog.microchipNumber) {
    errors.microchipNumber = "Microchip number is required";
  }
  if (!dog.dogName) {
    errors.dogName = "Dog name is required";
  }
  if (!dog.breed) {
    errors.breed = "Dog breed is required";
  }
  if (!dog.showName) {
    errors.showName = "Show name is required";
  }
  if (!dog.showCountry) {
    errors.showCountry = "Show country is required";
  }
  if (!dog.showPlace) {
    errors.showPlace = "Show place is required";
  }
  if (!dog.showJudge) {
    errors.showJudge = "Show judge is required";
  }
  if (!dog.showClass) {
    errors.showClass = "Show class is required";
  }
  if (!dog.dogBreeder) {
    errors.dogBreeder = "Dog breeder is required";
  }
  if (!dog.dogGender) {
    errors.dogGender = "Dog gender is required";
  }
  if (!dog.insurancePolicy) {
    errors.insurancePolicy = "Insurance policy is required";
  }
  if (!dog.insuranceContact) {
    errors.insuranceContact = "Insurance contact number is required";
  }
  if (!dog.vaccinationSerial) {
    errors.vaccinationSerial = "Serial number of vaccination is required";
  }
  //DOB
  if (!dog.dob.dobDay) {
    errors.dobDay = "DOB Day is required";
  } else if (Number(dog.dob.dobDay) > 31) {
    errors.dobDay = "DOB Day is wrong";
  } else if (!dog.dob.dobMonth) {
    errors.dobMonth = "DOB Month is required";
  } else if (Number(dog.dob.dobMonth) > 12) {
    errors.dobMonth = "DOB Month is wrong";
  } else if (!dog.dob.dobYear) {
    errors.dobYear = "DOB Year is required";
  } else if (dog.dob.dobYear.toString().length > 4) {
    errors.dobYear = "DOB Year is wrong";
  }
  //ShowDate
  if (!dog.showDate.showDay) {
    errors.showDay = "Show Day is required";
  } else if (Number(dog.showDate.showDay) > 31) {
    errors.showDay = "Show day is wrong";
  } else if (!dog.showDate.showMonth) {
    errors.showMonth = "Show Month is required";
  } else if (Number(dog.showDate.showMonth) > 12) {
    errors.showMonth = "Show month is wrong";
  } else if (!dog.showDate.showYear) {
    errors.showYear = "Show Year is required";
  } else if (dog.showDate.showYear.toString().length > 4) {
    errors.showYear = "Show year is wrong";
  }

  //Vaccination Expire

  if (!dog.vaccinationExpire.vaxpireDay) {
    errors.vaxpireDay = "Vaccine expire day is required";
  } else if (Number(dog.vaccinationExpire.vaxpireDay) > 31) {
    errors.vaxpireDay = "Vaccine expire day is wrong";
  } else if (!dog.vaccinationExpire.vaxpireMonth) {
    errors.vaxpireMonth = "Vaccine expire month is required";
  } else if (Number(dog.vaccinationExpire.vaxpireMonth) > 12) {
    errors.vaxpireMonth = "Vaccine expire month is wrong";
  } else if (!dog.vaccinationExpire.vaxpireYear) {
    errors.vaxpireYear = "Vaccine expire year is required";
  } else if (dog.vaccinationExpire.vaxpireYear.toString().length > 4) {
    errors.vaxpireYear = "Vaccine expire year is wrong";
  }

  //Insurance Start
  if (!dog.insuranceStart.insurasDay) {
    errors.insurasDay = "Insurance start day is required";
  } else if (Number(dog.insuranceStart.insurasDay) > 31) {
    errors.insurasDay = "Insurance start day is wrong";
  } else if (!dog.insuranceStart.insurasMonth) {
    errors.insurasMonth = "Insurance start month is required";
  } else if (Number(dog.insuranceStart.insurasMonth) > 12) {
    errors.insurasMonth = "Insurance start month is wrong";
  } else if (!dog.insuranceStart.insurasYear) {
    errors.insurasYear = "Insurance start year is required";
  } else if (dog.insuranceStart.insurasYear.toString().length > 4) {
    errors.insurasYear = "Insurance start year is wrong";
  }

  //Insurance Expire

  if (!dog.insuranceExpire.insuraxDay) {
    errors.insuraxDay = "Insurance expire day is required";
  } else if (Number(dog.insuranceExpire.insuraxDay) > 31) {
    errors.insuraxDay = "Insurance expire day is wrong";
  } else if (!dog.insuranceExpire.insuraxMonth) {
    errors.insuraxMonth = "Insurance expire month is required";
  } else if (Number(dog.insuranceExpire.insuraxMonth) > 12) {
    errors.insuraxMonth = "Insurance expire month is wrong";
  } else if (!dog.insuranceExpire.insuraxYear) {
    errors.insuraxYear = "Insurance expire year is required";
  } else if (dog.insuranceExpire.insuraxYear.toString().length > 4) {
    errors.insuraxYear = "Insurance expire year is wrong";
  }

  return errors;
};
