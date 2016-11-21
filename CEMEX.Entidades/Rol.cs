namespace CEMEX.Entidades
{
    public class Rol
    {
        public int Id { get; set; }
        public int IdJerarquia { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public bool AsignacionMultiple { get; set; }
        public int IdStatus { get; set; }
    }
}
