const userData = JSON.parse(localStorage.getItem('userData'));
const display= document.querySelector('.js-display');
display.innerHTML=`
<div class="congrats-message">
    <h2>
    Congrats,<span> ${userData.names}</span> Your ticket is ready. 
    </h2>
</div>
<div class="email-info">
    <p>
    We've emailed your ticket to <span>${userData.emails}</span> and will send<br> updates in the run up to the event.
    </p>
</div>
<div class="ticket-card">
    <img src=images/pattern-ticket.svg alt="ticket image" class="ticket-image">
    <div class="ticket-details">
      <div class="logo">
            <img src="images/logo-mark.svg">
            <p>Coding Conf<br><span>Jan 31, 2025 / Austin , TX</span></p>
      </div>
      
      <div class="info">
       <img src="${userData.image}" alt="avatar"
        class="avatar-preview-ticket"> 
        <div class="user-details">
        ${userData.names}<br>
         <div class="github-username">
            <img src="images/icon-github.svg">
            <span>${userData.githubs}</span>
         </div>
        </div>
      </div>
    </div>
     <div class="right"><p>#01609</p></div>
</div>
`;
console.log(userData.names, userData.emails, userData.githubs,userData.images);
