# Mobile Implementation Guide

## Installation on Mobile Devices

### iOS (iPhone/iPad)

#### Option 1: Web App (Recommended)
1. Open Safari and go to your POGO URL
2. Tap the Share button (↗️) at the bottom
3. Select "Add to Home Screen"
4. Confirm and tap "Add"
5. Your app will now appear on your home screen

**Benefits:**
- Native app-like experience
- Full notifications support
- Offline functionality with Service Worker
- Persistent data

#### Option 2: Bookmark
- Auto-fill with each visit
- Easier to update
- No home screen clutter

### Android

#### Option 1: Progressive Web App (PWA)
1. Open Chrome and go to your POGO URL
2. Tap the menu (three dots) ⋮
3. Select "Install app" or "Add to Home screen"
4. Confirm installation
5. App appears on home screen with icon

**Benefits:**
- True app-like installation
- Home screen shortcut
- Separate app window
- Push notifications when supported

#### Option 2: Add to Home Screen
1. Open any browser
2. Tap menu ⋮ → "Add to Home screen"
3. Customize name and confirm

### Mobile Features

#### Notifications on iOS
- ⚠️ **Limitation**: iOS Safari doesn't support Web Push yet
- ✅ **Workaround**: In-app notifications (bell icon) work perfectly
- 💡 **Tip**: Install as a web app for better notification handling

#### Notifications on Android
- ✅ Full browser notifications support
- ✅ Sound alerts work
- ✅ Persistent notifications
- 💡 Grant permission when prompted on first use

## Mobile Usage Guide

### Quick Task Entry
- **Quick Add**: Use the input at the top for instant task creation
- **Maximum Characters**: Task names can be up to 255 characters
- **Voice Input**: Tap AI button, then mic to dictate tasks

### Managing Tasks
- **Tap checkbox** to mark complete
- **Swipe icon** at the end to delete
- **Press task text** to edit inline
- **Hold for options** (context menu on some browsers)

### Alarms & Notifications

#### Setting Up Alarms
1. Tap **⏰ Alarm icon** in header
2. Choose default time (5, 15, or 30 min before)
3. Enable **Browser Notifications**
4. Grant permission when prompted
5. Toggle **Sound Alert** on/off

#### Per-Task Alarm Settings
1. Click **Manual** button
2. Set time and duration
3. Customize **Alarm (min before)** field
4. Toggle **Sound Alert**
5. Create task

#### Receiving Notifications
- **On Android**: Full notifications (sound, banner, badge)
- **On iOS**: In-app notifications (tap bell icon)
- **Notifications Panel**: Click bell icon to view history

### Calendar Export

#### Export Options
1. Tap **📅 Calendar icon** in header
2. Choose format:

**Download as .ics**
- Save file to device
- Open with Calendar app
- Works with all calendar apps

**Google Calendar**
- Opens in Google Calendar
- Easy drag-and-drop to your calendar
- Requires Google account

**Copy JSON**
- Perfect for backup
- Easy to share via text/email
- Import later using JSON

### Statistics View

#### Daily Stats
- View completed vs total tasks
- See task categories
- Check priority distribution
- Review completion percentage

#### Multiple Periods
- **Day**: Hourly breakdown
- **Week**: Daily view
- **Month**: Weekly view
- **Year**: Monthly view

#### Heatmap
- See productivity patterns
- Identify active/quiet days
- Track long-term trends

## Performance Tips

### Battery Life
- ✅ Disable sound alerts if not needed
- ✅ Disable notifications when not reviewing
- ✅ Close browser when not using (iOS Safari)
- ✅ Use light notifications without constant checking

### Network Usage
- ✅ Use offline mode when possible
- ✅ Voice input requires network for AI
- ✅ Calendar export works offline
- ✅ Data syncs automatically when online

### Storage
- ✅ Typical: 100-500 tasks = 100KB-500KB
- ✅ Clear old completed tasks to save space
- ✅ Export regularly as backup

## Troubleshooting

### Notifications Not Working
**Android:**
- Tap ⏰ icon → Enable "Browser Notifications"
- Check Android settings → Apps → Chrome/Browser → Notifications → On
- Restart browser
- Try uninstalling and reinstalling web app

**iOS:**
- Check Settings → Notifications → Safari → On
- Reload browser
- Use in-app notifications (bell icon) instead

### Tasks Not Saving
- Check browser storage isn't full
- Clear browser cache (⚠️ will delete tasks)
- Try private browsing to test
- Export tasks before clearing cache

### App Crashes or Freezes
- Close app and restart
- Clear browser cache
- Update browser/OS to latest version
- Try using private/incognito mode

### Offline Mode Not Working
- Service Worker requires HTTPS or localhost
- Check browser permissions for Service Worker
- Restart app after first install
- Ensure sufficient storage space

## Advanced Tips

### Keyboard Shortcuts
- **Enter**: Quick add (when in input field)
- **Tab**: Navigate between fields in modal
- **Escape**: Close modal or notification panel

### URL Parameters
- Share tasks easily via export/JSON
- Backup to cloud services
- Import on different device

### Browser Settings
- **Enable notifications**: Settings → Security → Notifications
- **Allow offline use**: Service Worker enabled by default
- **Storage quota**: Usually 10MB+ per domain

## Devices Tested

| Device | Browser | Status | Notes |
|--------|---------|--------|-------|
| iPhone 12+ | Safari | ✅ | In-app notif only |
| iPhone SE | Safari | ✅ | Works great |
| iPad Pro | Safari | ✅ | Tablet optimized |
| Android 10+ | Chrome | ✅ | Full support |
| Android 9 | Chrome | ✅ | Works |
| Pixel 6 | Chrome | ✅ | Push notif |
| Samsung Tab | Chrome | ✅ | Full features |

---

**Tips for Best Experience:**
1. ✅ Install as web app on home screen
2. ✅ Enable notifications & sound alerts
3. ✅ Grant required permissions upfront
4. ✅ Use voice input for quick task creation
5. ✅ Check stats daily for insights
6. ✅ Export to calendar monthly
7. ✅ Review notification history in bell panel

**Enjoy POGO on your mobile device! 📱✨**
