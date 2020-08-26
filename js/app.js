
	window.navigator.geolocation.getCurrentPosition(function(data){
		console.log(data);

		$.ajax({
			url: "https://api.opencagedata.com/geocode/v1/json?key=6c7248063dc74092a2e14576c1e40f43&q=26.338918399999997%2C89.21743359999999&pretty=1",
			success:function(data){
				console.log(data);

				let info = [];
				info.push(data.results[0].components.county);
				info.push(data.results[0].components.district);
		 		info.push(data.results[0].components.state);
				info.push(data.results[0].components.country);
				info.push(data.results[0].components.continent);

				$('#result').text(`${info[0]},${info[1]},${info[2]},${info[3]}`);



				for(let i=0;i<info.length;i++){
					for(let j=0;j<1;j++){
						$.ajax({
						url: 'https://api.unsplash.com/photos/random?query=' + info[i] + '&client_id=uvSmwZiZw6HlfhfvPaPQlM4hdXg_rkn7AjfG-I	MoOz0',
						success:function(data){
							console.log(data.urls.regular);
							$('#result').append(`
								
									<div class="card">
										<img src="${data.urls.regular}"
										width="100%";height="auto">
									</div>
								
								`);
						}
					});
					};
				};



			},
			error:function(){
				alert("Error");
			}
		});

	});
