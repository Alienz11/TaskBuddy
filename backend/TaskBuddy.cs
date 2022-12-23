namespace backend
{
    public class TaskBuddy
    {
        public int Id { get; set; }
        public string Priority { get; set; } = String.Empty;
        public string Task { get; set; } = String.Empty;
        public DateTime SetDate { get; set; } = DateTime.Now.Date; 
        public string? DueDate { get; set; } = String.Empty;
    }
}
