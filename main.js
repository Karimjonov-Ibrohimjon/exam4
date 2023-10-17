const elform = document.querySelector(".register");
const elInnerFirstName = document.querySelector(".register__inner--firstname");
const elInnerLastName = document.querySelector(".register__inner--lastname");
const elFirstName = document.querySelector(".register__nameinput");
const elLastName = document.querySelector(".register__lnameinput");
const elInnerMail = document.querySelector(".register__inner--mail")
const elMail = document.querySelector(".register__mailinput");
const elFirstPass = document.querySelector(".register__passwordinput");
const elInnerPass = document.querySelector(".register__inner--password");
const elInnerRepeat = document.querySelector(".register__inner--repeat")
const elRepeatPass = document.querySelector(".register__repeatinput");
const elPassBtn = document.querySelector(".register__passwordbtn");
const elRepeatBtn = document.querySelector(".register__repeatbtn");
const elErrFirstName = document.querySelector(".register__error--firstname");
const elErrLastName = document.querySelector(".register__error--lastname");
const elErrMail = document.querySelector(".register__error--mail");
const elErrPass = document.querySelector(".register__error--password");
const elErrRepeat = document.querySelector(".register__error--repeat");
const elMailBtn = document.querySelector(".register__mailbtn")


// -----------PASSWORD-----


elPassBtn.addEventListener("click", function(evt){
    evt.preventDefault();

    const elFirstPassValue = elFirstPass.value;
    


    if (elFirstPass.type == "password" ){
       elFirstPass.type = "text"
    } else{
       elFirstPass.type = "password"
    }
 })

 elRepeatBtn.addEventListener("click", function(evt){
    evt.preventDefault();

    const elRepeatPassValue = elRepeatPass.value;


    if (elRepeatPass.type == "password" ){
       elRepeatPass.type = "text"
    } else{
       elRepeatPass.type = "password"
    }
 })


elform.addEventListener("submit", function(evt){
    evt.preventDefault()
    const firstNameValue = elFirstName.value;
    const lastNameValue = elLastName.value;
    const mailInputValue = elMail.value;
    const elFirstPassValue = elFirstPass.value;
    const elRepeatPassValue = elRepeatPass.value;

    // -----------------------------------------------NAME---------------------------------------------
    
    if( firstNameValue.length < 3 || firstNameValue.length > 30){
        elInnerFirstName.classList.add("invalid")
        elErrFirstName.style.display="block";
        if (toastTrigger) {
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
            toastTrigger.addEventListener('click', () => {
              toastBootstrap.show()
            })
          }
        return;
    } else {
        elInnerFirstName.classList.remove("invalid")
        elErrFirstName.style.display="none"
    }

    if(lastNameValue.length < 3 || lastNameValue.length > 30){
        elInnerLastName.classList.add("invalid")
        elErrLastName.style.display="block";
        return;
    } else {
        elInnerLastName.classList.remove("invalid")
        elErrLastName.style.display="none"
    }
    for( let i = 0; i < firstNameValue.length; i++ ) {
        if(firstNameValue[i] == "0" || firstNameValue[i] == "1" || firstNameValue[i] == "2" || firstNameValue[i] == "3" || firstNameValue[i] == "4" || firstNameValue[i] == "5" || firstNameValue[i] == "6" || firstNameValue[i] == "7" || firstNameValue[i] == "8" || firstNameValue[i] == "9") {
           
            elInnerFirstName.classList.add("invalid")
            elErrFirstName.style.display="block";
            return;
    } else {
        elInnerFirstName.classList.remove("invalid")
        elErrFirstName.style.display="none"
    }
        }

        for( let i = 0; i < lastNameValue.length; i++ ) {
            if(lastNameValue[i] == "0" || lastNameValue[i] == "1" || lastNameValue[i] == "2" || lastNameValue[i] == "3" || lastNameValue[i] == "4" || lastNameValue[i] == "5" || lastNameValue[i] == "6" || lastNameValue[i] == "7" || lastNameValue[i] == "8" || lastNameValue[i] == "9") {
               
                elInnerLastName.classList.add("invalid")
                elErrLastName.style.display="block";
                return;
        } else {
            elInnerLastName.classList.remove("invalid")
            elErrLastName.style.display="none"
        }
            }

            // -------------EMAIL-----------


            if (mailInputValue.endsWith("@gmail.com") || mailInputValue.endsWith("@mail.ru")){
                elInnerMail.classList.remove("invalid");
                elErrMail.style.display="none"
                elMailBtn.style.backgroundImage = "url('./images/mail.svg')";
                
            }  else {
                elInnerMail.classList.add("invalid");
                elErrMail.style.display="block"
                elMailBtn.style.backgroundImage = "url('./images/mailerr.svg')";
            }
            
            // ----------PASSWORD---------


            

            const regPassword = function(password) {
                return String(password).match(
                    /^(?=.*\d)(?=.*[a-z]).{8}$/gm
                )
            }


            if(!regPassword(elFirstPassValue) ){
                elInnerPass.classList.add("invalid");
                elErrPass.style.display="block";
                elPassBtn.style.backgroundImage = "url('./images/eyeerr.svg')";
                
             
            } else{
                elInnerPass.classList.remove("invalid");
                elErrPass.style.display="none";
                elPassBtn.style.backgroundImage = "url('./images/eye.svg')";
            }
            
            if(!regPassword(elRepeatPassValue) || elRepeatPassValue != elFirstPassValue ){
                elInnerRepeat.classList.add("invalid");
                elErrRepeat.style.display="block";
                elRepeatBtn.style.backgroundImage = "url('./images/eyeerr.svg')";
                return;
                
            } else{
                elInnerRepeat.classList.remove("invalid");
                elErrRepeat.style.display="none";
                elRepeatBtn.style.backgroundImage = "url('./images/eye.svg')";
            }
        
            if(elErrFirstName.style.display == "block" || elErrLastName.style.display == "block" || elErrMail.style.display == "block" || elErrPass.style.display == "block" || elErrRepeat.style.display == "block"){
                document.querySelector(".registerbox").style.display = "block"

            } else{
                document.querySelector(".registerbox").style.display = "none"
                document.querySelector(".hero__box").style.display = "block"
                document.querySelector(".for-carusel").style.display = "block"
                document.querySelector(".btn-box").style.display = "flex"

            } 
            
 })

// -----------------------------result---------------------------------------------------

const elResultForm = document.querySelector(".result__form");
const elLabelName = document.querySelector(".contact__label--name");
const elLabelEmail = document.querySelector("contact__label--email");
const elLabelPhone = document.querySelector(".contact__label--tel");
const elLabelComp = document.querySelector(".contact__label--company");
const elContactName = document.querySelector(".contact__nameinput");
const elContactEmail = document.querySelector(".contact__emailinput");
const elContactTel = document.querySelector(".contact__telinput");
const elContactCompany = document.querySelector(".contact__companyinput");
const elErrContactName = document.querySelector(".contact__nameerr");
const elErrContactEmail = document.querySelector(".contact__emailerr");
const elErrContactTel = document.querySelector(".contact__telerr");
const elErrContactComp = document.querySelector(".contact__companyerr");



elResultForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    const contactNameValue = elContactName.value;
    const contactEmailValue = elContactEmail.value;
    const contactTelValue = elContactTel.value;
    const contactCompanyValue = elContactCompany.value;

    // ----------------------CONTACT NAME ---------------------------------------

    if( contactNameValue.length < 3 || contactNameValue.length > 30){
        elContactName.classList.add("invalid")
        elErrContactName.style.display="block";
        return;
    } else {
        elContactName.classList.remove("invalid")
        elErrContactName.style.display="none"
    }
    
    const regName = (Name) => {
        return String(Name).match(/^[a-zA-Z]{2,30}$/g);
      };

      if(!regName(contactNameValue)){
        elContactName.classList.add("invalid")
        elErrContactName.style.display="block"
      } else {
        elContactName.classList.remove("invalid")
        elErrContactName.style.display="none"
    }
        

        // --------------------------------CONTACT EMAIL----------------------------------
  
        if (contactEmailValue.endsWith("@gmail.com") || contactEmailValue.endsWith("@mail.ru")){
            elContactEmail.classList.remove("invalid");
            elErrContactEmail.style.display="none"
        }  else {
            elContactEmail.classList.add("invalid");
            elErrContactEmail.style.display="block"
            return;
        }

        // -----------------------------PHONE NUMBER -----------------------------

        const regphone = function(phone) {
            return String(phone).match(
               /^[+]998(90|91|93|94|95|97|98|99)[0-9]{7}$/gm
            )
        }

        if(!regphone(contactTelValue) ){
            elContactTel.classList.add("invalid");
            elErrContactTel.style.display="block";
            return;
        } else{
            elContactTel.classList.remove("invalid");
            elErrContactTel.style.display="none";
        }

        // ----------------------------COMPANY NAME--------------------------

        if( contactCompanyValue.length < 3 || contactCompanyValue.length > 20){
            elContactCompany.classList.add("invalid")
            elErrContactComp.style.display="block";
            return;
        } else {
            elContactCompany.classList.remove("invalid")
            elErrContactComp.style.display="none"
        }

        // ---------------------------------OVERALL RESULT -----------------------------------

        const elService = document.getElementsByName("services__input");
        for (i = 0; i < elService.length; i++){
            if(elService[i].checked){
                const userService = elService[i].value;
                document.querySelector(".desc__resultservice").textContent = userService;
            } 
        }

        const elBudget = document.getElementsByName("budget__input");
        for (i = 0; i < elBudget.length; i++){
            if(elBudget[i].checked){
                const userBudget = elBudget[i].value;
                document.querySelector(".desc__resultbudget").textContent = userBudget;
            }
        }   
        document.querySelector(".hero__box").style.display = "none"
        document.querySelector(".btn-box").style.display = "none"
        document.querySelector(".desc__resultname").textContent = contactNameValue;
        document.querySelector(".desc__resultemail").textContent = contactEmailValue;
        document.querySelector(".desc__resultcontact").textContent = contactTelValue;
        document.querySelector(".desc__resultcomp").textContent = contactCompanyValue;
        document.querySelector(".result__form").style.display = "none";
        document.querySelector(".desc-none").style.display = "block";


        
    })


$(document).ready(function(){
    $('.for-carusel').slick({
        dots: false,
        infinite: false,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });
  });

  const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')


 