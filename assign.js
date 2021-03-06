 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {
//token generated by facebook
    var myFacebookToken = "EAACEdEose0cBAPGOS0cMMc0UMDAt7WnFuiLCU8AyzC6eHzbCeRGGXrDp23HvYDP55XlpHpZC1oujAFKbuZAUpimGYz7ykk2MJCKfWFHmhZAkRc9fbZA0rZBNWzeJ3AD0l5C1M7EZCWj4jKyDFmqZC99vwKfxMeiwVBa7rLNtewkBgZDZD";
   
   
  //function definition for getting facebook profile information
    function getFacebookInfo(){  

        $.ajax('https://graph.facebook.com/me?fields=picture.width(250).height(250),id,name,first_name,last_name,birthday,about,hometown,languages,gender,education,work,relationship_status,quotes,family,website,email,cover.width(815).height(320)&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#myEmail").text(response.email);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#myBirthday").text(response.birthday);
                    $("#myHomeTown").text(response.hometown.name);
                    $("#myGender").text(response.gender);
                    $("#myGender").text(response.gender);
                    $("#myFirstName").text(response.first_name);
                    $("#myLastName").text(response.last_name);
                    $("#myQuotes").text(response.quotes);
                    $("#myCover").attr({"src":response.cover.source,width:600,height:300});
                    $("#myDp").attr({"src":response.picture.data.url,width:300,height:300});

                },

                error : function(request,errorType,errorMessage){
                    console.log(request);
                    console.log(errorType);
                    $('.container').html(`<div class="alert alert-info alert-dismissible" role="alert">
                        There is some problem with Access Token <input type="button" class="btn btn-primary"value="Try Again" onclick="location.reload();"/>
                        <button type="button" class="close" data-dismiss="alert">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                        </button>
                        </div>`);
                }
            }//end argument list 
 		);// end ajax call 
 	}// end get facebook info
 

 	 getFacebookInfo();//function call

		// function for getting facebook feed
      function getFacebookFeed(){

        $.ajax('https://graph.facebook.com/me?fields=posts{created_time,type,full_picture,story},picture.width(250).height(250),cover,likes&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);// response from facebook api
                    console.log(typeof(response));
                	$("#myPost0").text(response.posts.data[0].story);//to get the story text
                    $("#myPostpic0").attr({"src":response.posts.data[0].full_picture,width:150,height:150});// to get the picture of that post
                     
                    $("#myPost1").text(response.posts.data[1].story);
                    $("#myPostpic1").attr({"src":response.posts.data[1].full_picture,width:150,height:150});
                                                                                                       
                                                                                                       
                    $("#myPost2").text(response.posts.data[2].story);
                    $("#myPostpic2").attr({"src":response.posts.data[2].full_picture,width:150,height:150});
                                                                                                       
                    $("#myPost3").text(response.posts.data[3].story);
                    $("#myPostpic3").attr({"src":response.posts.data[3].full_picture,width:150,height:150});
                                                                                                       
                    $("#myPost4").text(response.posts.data[4].story);
                    $("#myPostpic4").attr({"src":response.posts.data[4].full_picture,width:150,height:150});
                                                                                                                                                                                                              
                                                                                           
                    $("#myPost5").text(response.posts.data[5].story);
                    $("#myPostpic5").attr({"src":response.posts.data[5].full_picture,width:150,height:150});
                                                                                                       
                    $("#myPost6").text(response.posts.data[6].story);
                    $("#myPostpic6").attr({"src":response.posts.data[6].full_picture,width:150,height:150});
                                                                                                       
                    $("#myPost7").text(response.posts.data[7].story);
                    $("#myPostpic7").attr({"src":response.posts.data[7].full_picture,width:150,height:150});
                                                                                                       
                    $("#myPost8").text(response.posts.data[8].story);
                    $("#myPostpic8").attr({"src":response.posts.data[8].full_picture,width:150,height:150});
                                                                                                       
                    $("#myPost9").text(response.posts.data[9].story);
                    $("#myPostpic9").attr({"src":response.posts.data[9].full_picture,width:150,height:150});
                                                                                                       
                    $("#myPost10").text(response.posts.data[10].story);
                    $("#myPostpic10").attr({"src":response.posts.data[10].full_picture,width:150,height:150});
                                                                                                       
                    $("#myPost11").text(response.posts.data[11].story);
                    $("#myPostpic11").attr({"src":response.posts.data[11].full_picture,width:150,height:150});
                                                                                                       
                    $("#myPost12").text(response.posts.data[12].story);
                    $("#myPostpic12").attr({"src":response.posts.data[12].full_picture,width:150,height:150});

                    $("#myPost13").text(response.posts.data[13].story);
                    $("#myPostpic13").attr({"src":response.posts.data[13].full_picture,width:150,height:150});


    },

                error : function(request,errorType,errorMessage){
                    console.log(request);
                    console.log(errorType);
                    $('.container').html(`<div class="alert alert-info alert-dismissible" role="alert">
                        There is some problem with Access Token <br> either put the new token or refresh the token <input type="button" class="btn btn-primary"value="Try Again" onclick="location.reload();"/>
                        <button type="button" class="close" data-dismiss="alert">
                        <span aria-hidden="true">&times;</span>
                        <span class="sr-only">Close</span>
                        </button>
                        </div>`);
                }
            }//end argument list 
 		);// end ajax call 
 	}// end get facebook post
  

  	getFacebookFeed();// function call



  });

