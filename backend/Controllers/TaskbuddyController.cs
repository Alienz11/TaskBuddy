using backend.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskBuddyController : ControllerBase
    {
        private readonly DataContext context;

        public TaskBuddyController(DataContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<TaskBuddy>>> GetTaskBuddies()
        {
            return Ok(await context.TaskBuddies.ToListAsync());
            /* For Manual Input*/
            /* return new List<TaskBuddy>
            {
                new TaskBuddy
                {
                    Priority = "High",
                    Task = "Learn the .NET frammework",
                    SetDate = DateTime.Now,
                    DueDate = "20/10/2022",
                }
            }; */
        }
        [HttpPost]
        public async Task<ActionResult<List<TaskBuddy>>> CreateTaskBuddy(TaskBuddy buddy)
        {
            // var new_buddy = TaskBuddy()
            context.Add(buddy);
            await context.SaveChangesAsync();

            return Ok(await context.TaskBuddies.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<TaskBuddy>>> UpdateTaskBuddy(TaskBuddy buddy)
        {
            var dbBuddy = await context.TaskBuddies.FindAsync(buddy.Id);
            if (dbBuddy == null)
                return BadRequest("Task Not Found");
            dbBuddy.Priority = buddy.Priority;
            dbBuddy.Task = buddy.Task;
            dbBuddy.SetDate = DateTime.Now.Date;
            dbBuddy.DueDate = buddy.DueDate;

            await context.SaveChangesAsync();

            return Ok(await context.TaskBuddies.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<TaskBuddy>>> DeleteTaskBuddy(int id)
        {
            var dbBuddy = await context.TaskBuddies.FindAsync(id);
            if (dbBuddy == null)
                return BadRequest("Task Not Found");
            context.TaskBuddies.Remove(dbBuddy);
            await context.SaveChangesAsync();

            return Ok(await context.TaskBuddies.ToListAsync());
        }
    }
}
