export default function useForm(form, type, e) {

  const allowedFileTypes = ['jpeg', 'png', 'jpg', 'gif', 'bmp', 'svg'];

 switch (type){
  case 'name':
    if(/\d/.test(e.target.value)){
      return({
        ...form,
        errorField: type,
        errorMessage: 'Name cannot contain number'
      });
    }else{
      return({
        ...form,
        name: e.target.value,
        errorField: null,
        errorMessage: null
      });
    };
  case 'age':
    if(!Number(e.target.value)){
      return({
        ...form,
        errorField: type,
        errorMessage: 'Age must only contain number'
      })
    }else{
      return({
        ...form,
        age: e.target.value,
        errorField: null,
        errorMessage: null
      })
    }
  case 'picture':
    const filename = e.target.files[0].name;
    const exe = filename.substring(filename.lastIndexOf('.')+1);

    if(!allowedFileTypes.includes(exe)){
      return({
        ...form,
        errorField: type,
        errorMessage: 'File type is not allowed'
      })
    }else{
      return({
        ...form,
        picture: e.target.files[0],
        errorField: null,
        errorMessage: null
      })
    };
  case 'tos':
    return({
      ...form,
      tos: e.target.checked,
      errorField: null,
      errorMessage: null
    })
  case 'submit':
    
    for(let i = 0; i < Object.keys(form).length-2;i++){
      if(!Object.values(form)[i] || Object.values(form)[i] === false){
        e.preventDefault();
        return ({
          ...form,
          errorField: Object.keys(form)[i],
          errorMessage: `${Object.keys(form)[i]} is missing`
        })
      } else {
        e.preventDefault();
        console.log(form);
        return ({
          ...form
        })
      }
    };
  };
};