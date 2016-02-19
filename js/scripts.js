function checkPassword (strng, cmp) {
	var error = "";
	if (strng == "") {
		error = "O campo senha deve ser preenchido.\n";
	}
	var illegalChars = /[\W_]/; // allow only letters and numbers    
	if ((strng.length < 8) || (strng.length > 16)) {
		error = "A senha deve conter de 8 a 16 caracteres ou n&uacute;meros.\n";
	} else if (illegalChars.test(strng)) {
		error = "A senha cont&eacute;m caracteres inv&aacute;lidos.\n";
	} else if(cmp.length==0) {
		error = "O campo confirma&ccedil;&atilde;o de senha deve ser preenchido.\n";
	} else if(strng != cmp) {
		error = "A senha n&atilde;o confere com a verifica&ccedil;&atilde;o.\n";
	}
	return error;    
}  

// Email
function checkEmail (strng) {
	var emailFilter=/^.+@.+\..{2,3}$/;
	if (!(emailFilter.test(strng))) {
		error = "Informe um e-mail v&aacute;lido.\n";
	} else {
		//test email for illegal characters
		var illegalChars= /[\(\)\<\>\,\;\:\\\"\[\]]/
		if (strng.match(illegalChars)) {
          error = "O email informado cont&eacute;m caracteres inv&aacute;lidos.\n";
       }
    }
    return error;    
}


//Telefone
function checkPhone (strng) {
	var error = "";
	var stripped = strng.replace(/[\(\)\.\-\ ]/g, ''); //strip out acceptable non-numeric characters
    if (isNaN(parseInt(stripped))) {
       error = "O telefone cont&eacute;m caracteres inv&aacute;lidos.";  
    }
    return error;
}  

//Celular
function checkCelular (strng) {
	var error = "";	
	var stripped = strng.replace(/[\(\)\.\-\ ]/g, ''); //strip out acceptable non-numeric characters
    if (isNaN(parseInt(stripped))) {
       error = "O celular cont&eacute;m caracteres inv&aacute;lidos.";  
    }
    return error;
}

//ramal
function checkRamal (strng) {
	var error = "";	
	var stripped = strng.replace(/[\(\)\.\-\ ]/g, ''); //strip out acceptable non-numeric characters
    if (isNaN(parseInt(stripped))) {
       error = "O ramal cont??m caracteres inv??lidos.";  
    }
    return error;
}

// usu??rio - 4-12 chars, uc, lc, and underscore only.

function checkUsername (strng) {
	var error = "";
	if (strng == "") {
		error = "Informe um usu&aacute;rio de e-mail.\n";
	}
    //var illegalChars = /\W/; // allow letters, numbers, and underscores
    var legalChars = /^[\w-]+/;
    //var illegalChars = /[^a-zA-Z0-9_-]/;
    if ((strng.length < 3) || (strng.length > 12)) {
       error = "O nome do usu&aacute;rio deve conter de 3 a 12 caracteres.\n";
    } 
    
    /*else if (illegalChars.test(strng)) {
    	error = "O nome do usu&aacute;rio cont&eacute;m caracteres inv&aacute;lidos.\n";
    }*/
    else if (!legalChars.test(strng)) {
    	error = "O nome do usu&aacute;rio cont&eacute;m caracteres inv&aacute;lidos.\n";
    }
    return error;
}       


// Entradas n?o vazias

function isEmpty(strng,msg) {
	var error = "";
	if (strng.length == 0) {
		error = msg+"\n"
	}
	return error;	  
}

// was textbox altered

function isDifferent(strng) {
var error = ""; 
  if (strng != "Can\'t touch this!") {
     error = "You altered the inviolate text area.\n";
  }
return error;
}

function confirmar() {
	return confirm("Deseja realmente excluir este registro?");
}
