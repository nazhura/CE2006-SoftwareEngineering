async function fetchVisitorshipStatus(){
    
    return fetch('https://justins.in/zljIsxrxNhygCBBYvhZ18KRhjOgsCSH6VbSu9y1glNkW7Ap6IF3gGAphvtVagjSQ6X6dkRI9BoxyeTJa8AcYWgrcQSaGG1e16W4zH65HPUZV9WGk6WoBrUGqVKxqWDqgntkzzUcFstTAWA9vgDsCBCWyXl5jevcPlLTVOnfxjLH25Ng1flJZFe55Mg6zOam4twSwBbhB')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                //console.log(data);
                return data;
                
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
}
 