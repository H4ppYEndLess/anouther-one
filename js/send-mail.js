let mail = document.getElementById('email')

function sendEmail() {
    Email.send({
        Host : "smtp-pulse.com",
        Username : "dante391.roman@gmail.com",
        Password : "nrDNmtQpDnF7s7F",
        To : mail,
        From : "Petlenko_Vlad@gmail.com",
        Subject : "Mailing",
        Body : "<html><h2>Цей сон</h2>'Біля озера у літню ніч<br> Ми були з тобою віч-на-віч,<br> Цілувались під зорями ми,<br> Били лебеді поруч крильми,<br> І несла понад світом луна,<br> І у мене кохана одна.<br> Хлюпотіла тихенько вода,<br> Що для нас і біда - не біда.<br> Цей сон, цей сон<br> Мені щоночі сниться.<br> Крізь сон, крізь сон<br> Вона мені сміється.<br> Цей сон, цей сон<br> Мене не покидає.<br> Любов, о сон,<br> Вона мене кохає.<br> Біля озера знову ідем,<br> Та у серці моїм тихий щем<br> Зірка в небі нічна дoгора,<br> Розставання приходить пора.<br> А благання моє: Зупинись!<br> Лебедята підняли у вись.<br> І бере нас розлука в полон,<br> А вночі ти приходиш, мій сон.'</html>"
    }).then(message => alert(message)
    );
}

