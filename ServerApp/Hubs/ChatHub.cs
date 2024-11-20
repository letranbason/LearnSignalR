using Microsoft.AspNetCore.SignalR;

namespace ServerApp.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }

        public async Task SendEmojiReaction(string user, string emoji)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, emoji);
        }
    }
}

