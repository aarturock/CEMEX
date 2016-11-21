namespace CEMEX.Entidades
{
    public class Modulo
    {
        public int Id { get; set; }
        public int IdPlataforma { get; set; }
        public int IdRegistroModulo { get; set; }
        public int Orden { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public string Icono { get; set; }
        public string Url { get; set; }
        public int IdStatus { get; set; }
    }
}
