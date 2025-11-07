// confirmación suave de borrado
document.querySelectorAll('.danger').forEach(link=>{
  link.addEventListener('click', e=>{
    if(!confirm("¿Eliminar este trabajo?")) e.preventDefault();
  });
});
