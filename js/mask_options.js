/**
 * @author egemen
 * @since 19.06.2016
 */
var mask_birthdate =  {
		  onChange: function(cep, event, currentField, options){
			  var str = currentField.val();
			  var d,dd,m,mm,y,yy,yyy,yyyy;
			  var length = str.length;
			  if(length== 1){
				  d = parseInt(str[0]);
				  if(d>3)
					  currentField.val('0'+ d);
			  }
			  if(length >= 2){
				  dd = parseInt(str[0]+str[1]);
				  if(!(dd<=31))
					  currentField.val(currentField.val().slice(0, -1));
			  }
			  if(length >= 4){
				  m = parseInt(str[3]);
				  if(m>1)
					  currentField.val(currentField.val().slice(0, -1) + '0' + m);
			  }
			  if(length >= 5){
				  mm = parseInt(str[3]+str[4]);
				  if(!(mm<=12))
					  currentField.val(currentField.val().slice(0, -1));
			  }
			  if(length >= 7){
				  y = parseInt(str[6]);
				  if(!(y == 1 || y == 2))
					  currentField.val(currentField.val().slice(0, -1));
			  }
			  if(length >= 8){
				  yy = parseInt(str[6]+str[7]);
				  if(!(yy== 19 || yy == 20))
					  currentField.val(currentField.val().slice(0, -1));
			  }
			  if(length >= 9){
				  yyy = parseInt(str[6]+str[7]+str[8]);
				  if(!(yyy >= 190 && yyy <= 203))
					  currentField.val(currentField.val().slice(0, -1));
			  }	  
		    
		  },
		  placeholder: "__.__.____"
		};