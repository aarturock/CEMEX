namespace CEMEX.Entidades
{
    public class Jerarquia
    {
        public int Id { get; set; }
        public int IdEmpresa { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public int JerarquiaPadre { get; set; }
        public int NivelEstructura { get; set; }
        public int IdEstatus { get; set; }
    }
}
