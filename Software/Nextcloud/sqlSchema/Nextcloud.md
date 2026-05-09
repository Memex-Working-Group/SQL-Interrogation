<!--

classDiagram
class oc_migrations{
 *VARCHAR<255> app NOT NULL
   *VARCHAR<255> version NOT NULL
}
class oc_appconfig{
 *VARCHAR<32> appid NOT NULL
   *VARCHAR<64> configkey NOT NULL
   TEXT configvalue
   SMALLINT lazy NOT NULL
   INTEGER type NOT NULL
}
class oc_storages{
 *BIGINT numeric_id NOT NULL
   INTEGER available NOT NULL
   VARCHAR<64> id
   INTEGER last_checked
}
class oc_mounts{
 *BIGINT id NOT NULL
   BIGINT mount_id
   VARCHAR<4000> mount_point NOT NULL
   VARCHAR<32> mount_point_hash NOT NULL
   VARCHAR<128> mount_provider_class
   BIGINT root_id NOT NULL
   BIGINT storage_id NOT NULL
   VARCHAR<64> user_id NOT NULL
}
class oc_mimetypes{
 *BIGINT id NOT NULL
   VARCHAR<255> mimetype NOT NULL
}
class oc_filecache{
 *BIGINT fileid NOT NULL
   VARCHAR<255> checksum
   INTEGER encrypted NOT NULL
   VARCHAR<40> etag
   BIGINT mimepart NOT NULL
   BIGINT mimetype NOT NULL
   BIGINT mtime NOT NULL
   VARCHAR<250> name
   BIGINT parent NOT NULL
   VARCHAR<4000> path
   VARCHAR<32> path_hash NOT NULL
   INTEGER permissions
   BIGINT size NOT NULL
   BIGINT storage NOT NULL
   BIGINT storage_mtime NOT NULL
   BIGINT unencrypted_size NOT NULL
}
class oc_group_user{
 *VARCHAR<64> gid NOT NULL
   *VARCHAR<64> uid NOT NULL
}
class oc_group_admin{
 *VARCHAR<64> gid NOT NULL
   *VARCHAR<64> uid NOT NULL
}
class oc_groups{
 *VARCHAR<64> gid NOT NULL
   VARCHAR<255> displayname NOT NULL
}
class oc_preferences{
 *VARCHAR<32> appid NOT NULL
   *VARCHAR<64> configkey NOT NULL
   *VARCHAR<64> userid NOT NULL
   TEXT configvalue
   INTEGER flags NOT NULL
   VARCHAR<64> indexed
   SMALLINT lazy NOT NULL
   SMALLINT type NOT NULL
}
class oc_properties{
 *BIGINT id NOT NULL
   VARCHAR<255> propertyname NOT NULL
   VARCHAR<255> propertypath NOT NULL
   TEXT propertyvalue NOT NULL
   VARCHAR<64> userid NOT NULL
   SMALLINT valuetype
}
class oc_jobs{
 *BIGINT id NOT NULL
   TEXT argument NOT NULL
   VARCHAR<64> argument_hash
   VARCHAR<255> class NOT NULL
   INTEGER execution_duration
   INTEGER last_checked
   INTEGER last_run
   INTEGER reserved_at
   SMALLINT time_sensitive NOT NULL
}
class oc_users{
 *VARCHAR<64> uid NOT NULL
   VARCHAR<64> displayname
   VARCHAR<255> password NOT NULL
   VARCHAR<64> uid_lower
}
class oc_authtoken{
 *BIGINT id NOT NULL
   INTEGER expires
   INTEGER last_activity
   INTEGER last_check
   VARCHAR<255> login_name NOT NULL
   TEXT name NOT NULL
   TEXT password
   VARCHAR<255> password_hash
   BOOLEAN password_invalid
   TEXT private_key
   TEXT public_key
   SMALLINT remember
   TEXT scope
   VARCHAR<200> token NOT NULL
   SMALLINT type
   VARCHAR<64> uid NOT NULL
   SMALLINT version NOT NULL
}
class oc_share{
 *BIGINT id NOT NULL
   SMALLINT accepted NOT NULL
   JSON attributes
   TIMESTAMP expiration
   BIGINT file_source
   VARCHAR<512> file_target
   SMALLINT hide_download
   VARCHAR<255> item_source
   VARCHAR<255> item_target
   VARCHAR<64> item_type NOT NULL
   VARCHAR<255> label
   SMALLINT mail_send NOT NULL
   TEXT note
   BIGINT parent
   VARCHAR<255> password
   BOOLEAN password_by_talk
   TIMESTAMP password_expiration_time
   SMALLINT permissions NOT NULL
   BOOLEAN reminder_sent
   VARCHAR<64> share_name
   SMALLINT share_type NOT NULL
   VARCHAR<255> share_with
   BIGINT stime NOT NULL
   VARCHAR<32> token
   VARCHAR<64> uid_initiator
   VARCHAR<64> uid_owner NOT NULL
}
class oc_bruteforce_attempts{
 *BIGINT id NOT NULL
   VARCHAR<64> action NOT NULL
   VARCHAR<255> ip NOT NULL
   VARCHAR<255> metadata NOT NULL
   INTEGER occurred NOT NULL
   VARCHAR<255> subnet NOT NULL
}
class oc_vcategory{
 *BIGINT id NOT NULL
   VARCHAR<255> category NOT NULL
   VARCHAR<64> type NOT NULL
   VARCHAR<64> uid NOT NULL
}
class oc_vcategory_to_object{
 *BIGINT categoryid NOT NULL
   *BIGINT objid NOT NULL
   *VARCHAR<64> type NOT NULL
}
class oc_systemtag_object_mapping{
 *VARCHAR<64> objectid NOT NULL
   *VARCHAR<64> objecttype NOT NULL
   *BIGINT systemtagid NOT NULL
}
class oc_systemtag_group{
 *VARCHAR<255> gid NOT NULL
   *BIGINT systemtagid NOT NULL
}
class oc_file_locks{
 *BIGINT id NOT NULL
   VARCHAR<64> key NOT NULL
   INTEGER lock NOT NULL
   INTEGER ttl NOT NULL
}
class oc_comments{
 *BIGINT id NOT NULL
   VARCHAR<64> actor_id NOT NULL
   VARCHAR<64> actor_type NOT NULL
   INTEGER children_count NOT NULL
   TIMESTAMP creation_timestamp
   TIMESTAMP expire_date
   TIMESTAMP latest_child_timestamp
   TEXT message
   TEXT meta_data
   VARCHAR<64> object_id NOT NULL
   VARCHAR<64> object_type NOT NULL
   BIGINT parent_id NOT NULL
   VARCHAR<4000> reactions
   VARCHAR<64> reference_id
   BIGINT topmost_parent_id NOT NULL
   VARCHAR<64> verb
}
class oc_comments_read_markers{
 *VARCHAR<64> object_id NOT NULL
   *VARCHAR<64> object_type NOT NULL
   *VARCHAR<64> user_id NOT NULL
   TIMESTAMP marker_datetime
}
class oc_accounts{
 *VARCHAR<64> uid NOT NULL
   TEXT data NOT NULL
}
class oc_twofactor_providers{
 *VARCHAR<32> provider_id NOT NULL
   *VARCHAR<64> uid NOT NULL
   SMALLINT enabled NOT NULL
}
class oc_collres_collections{
 *BIGINT id NOT NULL
   VARCHAR<64> name NOT NULL
}
class oc_collres_resources{
 *BIGINT collection_id NOT NULL
   *VARCHAR<64> resource_id NOT NULL
   *VARCHAR<64> resource_type NOT NULL
}
class oc_collres_accesscache{
 *BIGINT collection_id NOT NULL
   *VARCHAR<64> resource_id NOT NULL
   *VARCHAR<64> resource_type NOT NULL
   *VARCHAR<64> user_id NOT NULL
   BOOLEAN access
}
class oc_login_flow_v2{
 *BIGINT id NOT NULL
   VARCHAR<1024> app_password
   VARCHAR<255> client_name NOT NULL
   VARCHAR<255> login_name
   VARCHAR<255> login_token NOT NULL
   VARCHAR<255> poll_token NOT NULL
   TEXT private_key NOT NULL
   TEXT public_key NOT NULL
   VARCHAR<255> server
   SMALLINT started NOT NULL
   BIGINT timestamp NOT NULL
}
class oc_filecache_extended{
 *BIGINT fileid NOT NULL
   BIGINT creation_time NOT NULL
   VARCHAR<40> metadata_etag
   BIGINT upload_time NOT NULL
}
class oc_direct_edit{
 *BIGINT id NOT NULL
   BOOLEAN accessed
   VARCHAR<64> editor_id NOT NULL
   BIGINT file_id NOT NULL
   VARCHAR<4000> file_path
   BIGINT share_id
   BIGINT timestamp NOT NULL
   VARCHAR<64> token NOT NULL
   VARCHAR<64> user_id
}
class oc_webauthn{
 *INTEGER id NOT NULL
   TEXT data NOT NULL
   VARCHAR<64> name NOT NULL
   VARCHAR<512> public_key_credential_id NOT NULL
   VARCHAR<64> uid NOT NULL
   BOOLEAN user_verification
}
class oc_storages_credentials{
 *BIGINT id NOT NULL
   TEXT credentials
   VARCHAR<64> identifier NOT NULL
   VARCHAR<64> user
}
class oc_accounts_data{
 *BIGINT id NOT NULL
   VARCHAR<64> name NOT NULL
   VARCHAR<64> uid NOT NULL
   VARCHAR<255> value
}
class oc_known_users{
 *BIGINT id NOT NULL
   VARCHAR<255> known_to NOT NULL
   VARCHAR<255> known_user NOT NULL
}
class oc_authorized_groups{
 *INTEGER id NOT NULL
   VARCHAR<200> class NOT NULL
   VARCHAR<200> group_id NOT NULL
}
class oc_profile_config{
 *BIGINT id NOT NULL
   TEXT config NOT NULL
   VARCHAR<64> user_id NOT NULL
}
class oc_ratelimit_entries{
 *BIGINT id NOT NULL
   TIMESTAMP delete_after NOT NULL
   VARCHAR<128> hash NOT NULL
}
class oc_reactions{
 *BIGINT id NOT NULL
   VARCHAR<64> actor_id NOT NULL
   VARCHAR<64> actor_type NOT NULL
   BIGINT message_id NOT NULL
   BIGINT parent_id NOT NULL
   VARCHAR<32> reaction NOT NULL
}
class oc_textprocessing_tasks{
 *BIGINT id NOT NULL
   VARCHAR<32> app_id NOT NULL
   TIMESTAMP completion_expected_at
   VARCHAR<255> identifier NOT NULL
   TEXT input NOT NULL
   INTEGER last_updated
   TEXT output
   INTEGER status
   VARCHAR<255> type NOT NULL
   VARCHAR<64> user_id
}
class oc_text2image_tasks{
 *BIGINT id NOT NULL
   VARCHAR<32> app_id NOT NULL
   TIMESTAMP completion_expected_at
   VARCHAR<255> identifier
   TEXT input NOT NULL
   TIMESTAMP last_updated
   INTEGER number_of_images NOT NULL
   INTEGER status
   VARCHAR<64> user_id
}
class oc_files_metadata{
 *BIGINT id NOT NULL
   BIGINT file_id NOT NULL
   TEXT json NOT NULL
   TIMESTAMP last_update NOT NULL
   VARCHAR<15> sync_token NOT NULL
}
class oc_files_metadata_index{
 *BIGINT id NOT NULL
   BIGINT file_id NOT NULL
   VARCHAR<31> meta_key
   BIGINT meta_value_int
   VARCHAR<63> meta_value_string
}
class oc_taskprocessing_tasks{
 *BIGINT id NOT NULL
   SMALLINT allow_cleanup NOT NULL
   VARCHAR<32> app_id NOT NULL
   TIMESTAMP completion_expected_at
   VARCHAR<255> custom_id
   INTEGER ended_at
   VARCHAR<4000> error_message
   SMALLINT include_watermark NOT NULL
   TEXT input NOT NULL
   INTEGER last_updated
   TEXT output
   DOUBLE PRECISION progress
   INTEGER scheduled_at
   INTEGER started_at
   INTEGER status
   VARCHAR<255> type NOT NULL
   VARCHAR<4000> user_facing_error_message
   VARCHAR<64> user_id
   VARCHAR<64> webhook_method
   VARCHAR<4000> webhook_uri
}
class oc_sec_signatory{
 *BIGINT id NOT NULL
   VARCHAR<127> account
   INTEGER creation
   VARCHAR<512> host NOT NULL
   VARCHAR<512> key_id NOT NULL
   VARCHAR<127> key_id_sum NOT NULL
   INTEGER last_updated
   TEXT metadata NOT NULL
   VARCHAR<31> provider_id NOT NULL
   TEXT public_key NOT NULL
   SMALLINT status NOT NULL
   SMALLINT type NOT NULL
}
class oc_preview_locations{
 *BIGINT id NOT NULL
   VARCHAR<40> bucket_name NOT NULL
   VARCHAR<40> object_store_name NOT NULL
}
class oc_preview_versions{
 *BIGINT id NOT NULL
   BIGINT file_id NOT NULL
   VARCHAR<1024> version NOT NULL
}
class oc_previews{
 *BIGINT id NOT NULL
   BOOLEAN cropped NOT NULL
   BOOLEAN encrypted NOT NULL
   CHAR<40> etag NOT NULL
   BIGINT file_id NOT NULL
   INTEGER height NOT NULL
   BIGINT location_id
   BOOLEAN max NOT NULL
   INTEGER mimetype_id NOT NULL
   INTEGER mtime NOT NULL
   BIGINT old_file_id
   INTEGER size NOT NULL
   INTEGER source_mimetype_id NOT NULL
   BIGINT storage_id NOT NULL
   BIGINT version_id NOT NULL
   INTEGER width NOT NULL
}
class oc_activity{
 *BIGINT activity_id NOT NULL
   VARCHAR<64> affecteduser NOT NULL
   VARCHAR<32> app NOT NULL
   VARCHAR<4000> file
   VARCHAR<4000> link
   VARCHAR<255> message
   TEXT messageparams
   BIGINT object_id NOT NULL
   VARCHAR<255> object_type
   INTEGER priority NOT NULL
   VARCHAR<255> subject NOT NULL
   TEXT subjectparams NOT NULL
   INTEGER timestamp NOT NULL
   VARCHAR<255> type
   VARCHAR<64> user
}
class oc_activity_mq{
 *BIGINT mail_id NOT NULL
   VARCHAR<64> amq_affecteduser NOT NULL
   VARCHAR<32> amq_appid NOT NULL
   INTEGER amq_latest_send NOT NULL
   VARCHAR<255> amq_subject NOT NULL
   TEXT amq_subjectparams
   INTEGER amq_timestamp NOT NULL
   VARCHAR<255> amq_type NOT NULL
   BIGINT object_id NOT NULL
   VARCHAR<255> object_type
}
class oc_appconfig_ex{
 *BIGINT id NOT NULL
   VARCHAR<32> appid NOT NULL
   VARCHAR<64> configkey NOT NULL
   TEXT configvalue
   SMALLINT sensitive NOT NULL
}
class oc_ex_apps{
 *BIGINT id NOT NULL
   VARCHAR<32> appid NOT NULL
   BIGINT created_time NOT NULL
   VARCHAR<64> daemon_config_name NOT NULL
   SMALLINT enabled NOT NULL
   VARCHAR<64> name NOT NULL
   SMALLINT port NOT NULL
   VARCHAR<256> secret NOT NULL
   JSON status NOT NULL
   VARCHAR<32> version NOT NULL
}
class oc_ex_apps_daemons{
 *BIGINT id NOT NULL
   VARCHAR<64> accepts_deploy_id NOT NULL
   JSON deploy_config NOT NULL
   VARCHAR<255> display_name NOT NULL
   VARCHAR<255> host NOT NULL
   VARCHAR<64> name NOT NULL
   VARCHAR<32> protocol NOT NULL
}
class oc_preferences_ex{
 *BIGINT id NOT NULL
   VARCHAR<32> appid NOT NULL
   VARCHAR<64> configkey NOT NULL
   TEXT configvalue
   SMALLINT sensitive NOT NULL
   VARCHAR<64> userid NOT NULL
}
class oc_ex_ui_top_menu{
 *BIGINT id NOT NULL
   SMALLINT admin_required NOT NULL
   VARCHAR<32> appid NOT NULL
   VARCHAR<32> display_name NOT NULL
   VARCHAR<255> icon
   VARCHAR<32> name NOT NULL
}
class oc_ex_ui_states{
 *BIGINT id NOT NULL
   VARCHAR<32> appid NOT NULL
   VARCHAR<64> key NOT NULL
   VARCHAR<32> name NOT NULL
   VARCHAR<16> type NOT NULL
   JSON value NOT NULL
}
class oc_ex_ui_scripts{
 *BIGINT id NOT NULL
   VARCHAR<32> after_app_id
   VARCHAR<32> appid NOT NULL
   VARCHAR<32> name NOT NULL
   VARCHAR<410> path NOT NULL
   VARCHAR<16> type NOT NULL
}
class oc_ex_ui_styles{
 *BIGINT id NOT NULL
   VARCHAR<32> appid NOT NULL
   VARCHAR<32> name NOT NULL
   VARCHAR<410> path NOT NULL
   VARCHAR<16> type NOT NULL
}
class oc_ex_ui_files_actions{
 *BIGINT id NOT NULL
   VARCHAR<64> action_handler NOT NULL
   VARCHAR<32> appid NOT NULL
   VARCHAR<64> display_name NOT NULL
   VARCHAR<255> icon
   TEXT mime NOT NULL
   VARCHAR<64> name NOT NULL
   BIGINT order NOT NULL
   VARCHAR<255> permissions NOT NULL
   VARCHAR<64> version NOT NULL
}
class oc_ex_settings_forms{
 *BIGINT id NOT NULL
   VARCHAR<32> appid NOT NULL
   VARCHAR<64> formid NOT NULL
   JSON scheme NOT NULL
}
class oc_ex_occ_commands{
 *BIGINT id NOT NULL
   VARCHAR<32> appid NOT NULL
   JSON arguments NOT NULL
   VARCHAR<255> description
   VARCHAR<410> execute_handler NOT NULL
   SMALLINT hidden NOT NULL
   VARCHAR<64> name NOT NULL
   JSON options NOT NULL
   JSON usages NOT NULL
}
class oc_ex_task_processing{
 *BIGINT id NOT NULL
   VARCHAR<32> app_id NOT NULL
   TEXT custom_task_type
   VARCHAR<255> display_name NOT NULL
   VARCHAR<255> name NOT NULL
   TEXT provider NOT NULL
   VARCHAR<255> task_type NOT NULL
}
class oc_ex_apps_routes{
 *INTEGER id NOT NULL
   INTEGER access_level NOT NULL
   VARCHAR<32> appid NOT NULL
   VARCHAR<512> bruteforce_protection
   VARCHAR<512> headers_to_exclude
   VARCHAR<512> url NOT NULL
   VARCHAR<64> verb NOT NULL
}
class oc_ex_deploy_options{
 *BIGINT id NOT NULL
   VARCHAR<32> appid NOT NULL
   VARCHAR<32> type NOT NULL
   JSON value NOT NULL
}
class oc_circles_circle{
 *INTEGER id NOT NULL
   INTEGER config
   INTEGER contact_addressbook
   VARCHAR<127> contact_groupname
   TIMESTAMP creation
   TEXT description
   VARCHAR<255> display_name
   VARCHAR<255> instance
   VARCHAR<127> name NOT NULL
   VARCHAR<127> sanitized_name
   TEXT settings
   INTEGER source
   VARCHAR<31> unique_id NOT NULL
}
class oc_circles_member{
 *INTEGER id NOT NULL
   VARCHAR<255> cached_name
   TIMESTAMP cached_update
   VARCHAR<31> circle_id NOT NULL
   VARCHAR<127> contact_id
   TEXT contact_meta
   VARCHAR<255> instance
   VARCHAR<31> invited_by
   TIMESTAMP joined
   SMALLINT level NOT NULL
   VARCHAR<31> member_id
   TEXT note
   VARCHAR<31> single_id
   VARCHAR<15> status
   VARCHAR<127> user_id NOT NULL
   SMALLINT user_type NOT NULL
}
class oc_circles_remote{
 *INTEGER id NOT NULL
   TIMESTAMP creation
   VARCHAR<254> href
   VARCHAR<127> instance
   INTEGER interface NOT NULL
   TEXT item
   VARCHAR<15> type NOT NULL
   VARCHAR<20> uid
}
class oc_circles_membership{
 *VARCHAR<31> circle_id NOT NULL
   *VARCHAR<31> single_id NOT NULL
   INTEGER inheritance_depth NOT NULL
   VARCHAR<31> inheritance_first NOT NULL
   VARCHAR<31> inheritance_last NOT NULL
   TEXT inheritance_path NOT NULL
   INTEGER level NOT NULL
}
class oc_circles_token{
 *INTEGER id NOT NULL
   INTEGER accepted
   VARCHAR<31> circle_id
   VARCHAR<31> member_id
   VARCHAR<127> password
   INTEGER share_id
   VARCHAR<31> single_id
   VARCHAR<31> token
}
class oc_circles_mount{
 *INTEGER id NOT NULL
   VARCHAR<31> circle_id NOT NULL
   VARCHAR<31> mount_id NOT NULL
   TEXT mountpoint
   VARCHAR<64> mountpoint_hash
   INTEGER parent
   VARCHAR<255> remote
   INTEGER remote_id NOT NULL
   VARCHAR<31> single_id NOT NULL
   VARCHAR<63> token
}
class oc_circles_mountpoint{
 *INTEGER id NOT NULL
   VARCHAR<31> mount_id NOT NULL
   TEXT mountpoint
   VARCHAR<64> mountpoint_hash
   VARCHAR<31> single_id NOT NULL
}
class oc_circles_share_lock{
 *INTEGER id NOT NULL
   VARCHAR<31> circle_id NOT NULL
   VARCHAR<127> instance NOT NULL
   VARCHAR<31> item_id NOT NULL
}
class oc_circles_event{
 *VARCHAR<255> instance NOT NULL
   *VARCHAR<63> token NOT NULL
   BIGINT creation
   TEXT event
   INTEGER interface NOT NULL
   TEXT result
   INTEGER retry
   INTEGER severity
   INTEGER status
   TIMESTAMP updated
}
class oc_federated_invites{
 *BIGINT id NOT NULL
   BOOLEAN accepted
   BIGINT accepted_at
   BIGINT created_at NOT NULL
   BIGINT expired_at
   VARCHAR<320> recipient_email
   VARCHAR<1024> recipient_name
   VARCHAR<2083> recipient_provider
   VARCHAR<1024> recipient_user_id
   VARCHAR<60> token NOT NULL
   VARCHAR<64> user_id NOT NULL
}
class oc_recent_contact{
 *INTEGER id NOT NULL
   VARCHAR<64> actor_uid NOT NULL
   BYTEA card NOT NULL
   VARCHAR<255> email
   VARCHAR<255> federated_cloud_id
   INTEGER last_contact NOT NULL
   VARCHAR<64> uid
}
class oc_addressbooks{
 *BIGINT id NOT NULL
   VARCHAR<255> description
   VARCHAR<255> displayname
   VARCHAR<255> principaluri
   INTEGER synctoken NOT NULL
   VARCHAR<255> uri
}
class oc_cards{
 *BIGINT id NOT NULL
   BIGINT addressbookid NOT NULL
   BYTEA carddata
   VARCHAR<32> etag
   BIGINT lastmodified
   BIGINT size NOT NULL
   VARCHAR<255> uid
   VARCHAR<255> uri
}
class oc_addressbookchanges{
 *BIGINT id NOT NULL
   BIGINT addressbookid NOT NULL
   INTEGER created_at NOT NULL
   SMALLINT operation NOT NULL
   INTEGER synctoken NOT NULL
   VARCHAR<255> uri
}
class oc_calendarobjects{
 *BIGINT id NOT NULL
   BYTEA calendardata
   BIGINT calendarid NOT NULL
   INTEGER calendartype NOT NULL
   INTEGER classification
   VARCHAR<8> componenttype
   INTEGER deleted_at
   VARCHAR<32> etag
   BIGINT firstoccurence
   INTEGER lastmodified
   BIGINT lastoccurence
   BIGINT size NOT NULL
   VARCHAR<512> uid
   VARCHAR<255> uri
}
class oc_calendars{
 *BIGINT id NOT NULL
   VARCHAR<255> calendarcolor
   INTEGER calendarorder NOT NULL
   VARCHAR<64> components
   INTEGER deleted_at
   VARCHAR<255> description
   VARCHAR<255> displayname
   VARCHAR<255> principaluri
   INTEGER synctoken NOT NULL
   TEXT timezone
   SMALLINT transparent NOT NULL
   VARCHAR<255> uri
}
class oc_calendarchanges{
 *BIGINT id NOT NULL
   BIGINT calendarid NOT NULL
   INTEGER calendartype NOT NULL
   INTEGER created_at NOT NULL
   SMALLINT operation NOT NULL
   INTEGER synctoken NOT NULL
   VARCHAR<255> uri
}
class oc_calendarsubscriptions{
 *BIGINT id NOT NULL
   VARCHAR<255> calendarcolor
   INTEGER calendarorder NOT NULL
   VARCHAR<100> displayname
   INTEGER lastmodified
   VARCHAR<255> principaluri
   VARCHAR<10> refreshrate
   TEXT source
   SMALLINT stripalarms
   SMALLINT stripattachments
   SMALLINT striptodos
   INTEGER synctoken NOT NULL
   VARCHAR<255> uri
}
class oc_schedulingobjects{
 *BIGINT id NOT NULL
   BYTEA calendardata
   VARCHAR<32> etag
   INTEGER lastmodified
   VARCHAR<255> principaluri
   BIGINT size NOT NULL
   VARCHAR<255> uri
}
class oc_cards_properties{
 *BIGINT id NOT NULL
   BIGINT addressbookid NOT NULL
   BIGINT cardid NOT NULL
   VARCHAR<64> name
   INTEGER preferred NOT NULL
   VARCHAR<255> value
}
class oc_calendarobjects_props{
 *BIGINT id NOT NULL
   BIGINT calendarid NOT NULL
   INTEGER calendartype NOT NULL
   VARCHAR<64> name
   BIGINT objectid NOT NULL
   VARCHAR<64> parameter
   VARCHAR<255> value
}
class oc_dav_shares{
 *BIGINT id NOT NULL
   SMALLINT access
   VARCHAR<255> principaluri
   VARCHAR<255> publicuri
   BIGINT resourceid NOT NULL
   VARCHAR<255> token
   VARCHAR<255> type
}
class oc_directlink{
 *BIGINT id NOT NULL
   BIGINT expiration NOT NULL
   BIGINT file_id NOT NULL
   VARCHAR<60> token
   VARCHAR<64> user_id
}
class oc_calendar_resources{
 *BIGINT id NOT NULL
   VARCHAR<64> backend_id
   VARCHAR<255> displayname
   VARCHAR<255> email
   VARCHAR<4000> group_restrictions
   VARCHAR<64> resource_id
}
class oc_calendar_rooms{
 *BIGINT id NOT NULL
   VARCHAR<64> backend_id
   VARCHAR<255> displayname
   VARCHAR<255> email
   VARCHAR<4000> group_restrictions
   VARCHAR<64> resource_id
}
class oc_calendar_invitations{
 *BIGINT id NOT NULL
   VARCHAR<255> attendee NOT NULL
   BIGINT expiration NOT NULL
   VARCHAR<255> organizer NOT NULL
   VARCHAR<255> recurrenceid
   BIGINT sequence
   VARCHAR<60> token NOT NULL
   VARCHAR<512> uid NOT NULL
}
class oc_calendar_resources_md{
 *BIGINT id NOT NULL
   VARCHAR<255> key NOT NULL
   BIGINT resource_id NOT NULL
   VARCHAR<4000> value
}
class oc_calendar_rooms_md{
 *BIGINT id NOT NULL
   VARCHAR<255> key NOT NULL
   BIGINT room_id NOT NULL
   VARCHAR<4000> value
}
class oc_dav_cal_proxy{
 *BIGINT id NOT NULL
   VARCHAR<64> owner_id NOT NULL
   INTEGER permissions
   VARCHAR<64> proxy_id NOT NULL
}
class oc_calendar_reminders{
 *BIGINT id NOT NULL
   VARCHAR<255> alarm_hash NOT NULL
   BIGINT calendar_id NOT NULL
   VARCHAR<255> event_hash NOT NULL
   SMALLINT is_recurrence_exception NOT NULL
   SMALLINT is_recurring
   SMALLINT is_relative NOT NULL
   SMALLINT is_repeat_based NOT NULL
   BIGINT notification_date NOT NULL
   BIGINT object_id NOT NULL
   BIGINT recurrence_id
   VARCHAR<255> type NOT NULL
   VARCHAR<512> uid NOT NULL
}
class oc_dav_absence{
 *INTEGER id NOT NULL
   VARCHAR<10> first_day NOT NULL
   VARCHAR<10> last_day NOT NULL
   TEXT message NOT NULL
   VARCHAR<64> replacement_user_display_name
   VARCHAR<64> replacement_user_id
   VARCHAR<100> status NOT NULL
   VARCHAR<64> user_id NOT NULL
}
class oc_calendars_federated{
 *BIGINT id NOT NULL
   VARCHAR<7> color
   VARCHAR<255> components NOT NULL
   VARCHAR<255> display_name NOT NULL
   BIGINT last_sync
   INTEGER permissions NOT NULL
   VARCHAR<255> principaluri NOT NULL
   VARCHAR<255> remote_url NOT NULL
   VARCHAR<255> shared_by NOT NULL
   VARCHAR<255> shared_by_display_name NOT NULL
   INTEGER sync_token NOT NULL
   VARCHAR<255> token NOT NULL
   VARCHAR<255> uri NOT NULL
}
class oc_federated_reshares{
 *BIGINT share_id NOT NULL
   VARCHAR<255> remote_id
}
class oc_trusted_servers{
 *INTEGER id NOT NULL
   VARCHAR<256> shared_secret
   INTEGER status NOT NULL
   VARCHAR<512> sync_token
   VARCHAR<128> token
   VARCHAR<512> url NOT NULL
   VARCHAR<255> url_hash NOT NULL
}
class oc_user_transfer_owner{
 *BIGINT id NOT NULL
   BIGINT file_id NOT NULL
   VARCHAR<255> node_name NOT NULL
   VARCHAR<64> source_user NOT NULL
   VARCHAR<64> target_user NOT NULL
}
class oc_open_local_editor{
 *BIGINT id NOT NULL
   BIGINT expiration_time NOT NULL
   VARCHAR<64> path_hash NOT NULL
   VARCHAR<128> token NOT NULL
   VARCHAR<64> user_id NOT NULL
}
class oc_shares_limits{
 *VARCHAR<32> id NOT NULL
   BIGINT downloads NOT NULL
   BIGINT limit NOT NULL
}
class oc_files_reminders{
 *BIGINT id NOT NULL
   TIMESTAMP created_at NOT NULL
   TIMESTAMP due_date NOT NULL
   BIGINT file_id NOT NULL
   BOOLEAN notified
   TIMESTAMP updated_at NOT NULL
   VARCHAR<64> user_id NOT NULL
}
class oc_share_external{
 *BIGINT id NOT NULL
   INTEGER accepted NOT NULL
   VARCHAR<4000> mountpoint NOT NULL
   VARCHAR<32> mountpoint_hash NOT NULL
   VARCHAR<4000> name NOT NULL
   VARCHAR<255> owner NOT NULL
   BIGINT parent
   VARCHAR<64> password
   VARCHAR<512> remote NOT NULL
   VARCHAR<255> remote_id
   VARCHAR<64> share_token NOT NULL
   INTEGER share_type
   VARCHAR<64> user NOT NULL
}
class oc_files_trash{
 *BIGINT auto_id NOT NULL
   VARCHAR<64> deleted_by
   VARCHAR<250> id NOT NULL
   VARCHAR<512> location NOT NULL
   VARCHAR<255> mime
   VARCHAR<12> timestamp NOT NULL
   VARCHAR<4> type
   VARCHAR<64> user NOT NULL
}
class oc_files_versions{
 *BIGINT id NOT NULL
   BIGINT file_id NOT NULL
   JSON metadata NOT NULL
   BIGINT mimetype NOT NULL
   BIGINT size NOT NULL
   BIGINT timestamp NOT NULL
}
class oc_notifications{
 *INTEGER notification_id NOT NULL
   TEXT actions
   VARCHAR<32> app NOT NULL
   VARCHAR<4000> icon
   VARCHAR<4000> link
   VARCHAR<64> message
   TEXT message_parameters
   VARCHAR<64> object_id NOT NULL
   VARCHAR<64> object_type NOT NULL
   VARCHAR<64> subject NOT NULL
   TEXT subject_parameters
   INTEGER timestamp NOT NULL
   VARCHAR<64> user NOT NULL
}
class oc_notifications_pushhash{
 *INTEGER id NOT NULL
   VARCHAR<32> apptype NOT NULL
   VARCHAR<128> deviceidentifier NOT NULL
   VARCHAR<512> devicepublickey NOT NULL
   VARCHAR<128> devicepublickeyhash NOT NULL
   VARCHAR<256> proxyserver NOT NULL
   VARCHAR<128> pushtokenhash NOT NULL
   INTEGER token NOT NULL
   VARCHAR<64> uid NOT NULL
}
class oc_notifications_settings{
 *BIGINT id NOT NULL
   INTEGER batch_time NOT NULL
   BIGINT last_send_id NOT NULL
   INTEGER next_send_time NOT NULL
   VARCHAR<64> user_id NOT NULL
}
class oc_oauth2_clients{
 *INTEGER id NOT NULL
   VARCHAR<64> client_identifier NOT NULL
   VARCHAR<64> name NOT NULL
   VARCHAR<2000> redirect_uri NOT NULL
   VARCHAR<512> secret NOT NULL
}
class oc_oauth2_access_tokens{
 *INTEGER id NOT NULL
   INTEGER client_id NOT NULL
   BIGINT code_created_at NOT NULL
   VARCHAR<786> encrypted_token NOT NULL
   VARCHAR<128> hashed_code NOT NULL
   BIGINT token_count NOT NULL
   INTEGER token_id NOT NULL
}
class oc_photos_albums{
 *BIGINT album_id NOT NULL
   BIGINT created NOT NULL
   TEXT filters
   BIGINT last_added_photo NOT NULL
   VARCHAR<255> location NOT NULL
   VARCHAR<255> name NOT NULL
   VARCHAR<255> user NOT NULL
}
class oc_photos_albums_files{
 *BIGINT album_file_id NOT NULL
   BIGINT added NOT NULL
   BIGINT album_id NOT NULL
   BIGINT file_id NOT NULL
   VARCHAR<64> owner
}
class oc_photos_albums_collabs{
 *BIGINT id NOT NULL
   BIGINT album_id NOT NULL
   VARCHAR<64> collaborator_id NOT NULL
   INTEGER collaborator_type NOT NULL
}
class oc_privacy_admins{
 *INTEGER id NOT NULL
   VARCHAR<64> displayname NOT NULL
}
class oc_systemtag{
 *BIGINT id NOT NULL
   VARCHAR<6> color
   SMALLINT editable NOT NULL
   VARCHAR<32> etag
   VARCHAR<64> name NOT NULL
   SMALLINT visibility NOT NULL
}
class oc_text_documents{
 *BIGINT id NOT NULL
   VARCHAR<64> base_version_etag
   VARCHAR<8> checksum
   BIGINT current_version
   BIGINT last_saved_version
   VARCHAR<64> last_saved_version_etag
   BIGINT last_saved_version_time NOT NULL
}
class oc_text_sessions{
 *BIGINT id NOT NULL
   VARCHAR<7> color
   BIGINT document_id NOT NULL
   VARCHAR<64> guest_name
   TEXT last_awareness_message
   BIGINT last_contact NOT NULL
   VARCHAR<64> token NOT NULL
   VARCHAR<64> user_id
}
class oc_text_steps{
 *BIGINT id NOT NULL
   TEXT data NOT NULL
   BIGINT document_id NOT NULL
   BIGINT session_id NOT NULL
   BIGINT timestamp NOT NULL
   BIGINT version
}
class oc_twofactor_backupcodes{
 *BIGINT id NOT NULL
   VARCHAR<128> code NOT NULL
   SMALLINT used NOT NULL
   VARCHAR<64> user_id NOT NULL
}
class oc_twofactor_totp_secrets{
 *INTEGER id NOT NULL
   BIGINT last_counter NOT NULL
   TEXT secret NOT NULL
   INTEGER state NOT NULL
   VARCHAR<64> user_id NOT NULL
}
class oc_user_status{
 *BIGINT id NOT NULL
   INTEGER clear_at
   VARCHAR<255> custom_icon
   TEXT custom_message
   BOOLEAN is_backup
   BOOLEAN is_user_defined
   VARCHAR<255> message_id
   VARCHAR<255> status NOT NULL
   INTEGER status_message_timestamp NOT NULL
   INTEGER status_timestamp NOT NULL
   VARCHAR<255> user_id NOT NULL
}
class oc_webhook_listeners{
 *BIGINT id NOT NULL
   VARCHAR<64> app_id
   TEXT auth_data
   VARCHAR<16> auth_method NOT NULL
   VARCHAR<4000> event NOT NULL
   TEXT event_filter
   TEXT headers
   VARCHAR<32> http_method NOT NULL
   TEXT token_needed
   VARCHAR<4000> uri NOT NULL
   VARCHAR<64> user_id
   VARCHAR<64> user_id_filter
}
class oc_webhook_tokens{
 *BIGINT id NOT NULL
   BIGINT created_at NOT NULL
   BIGINT token_id NOT NULL
   VARCHAR<64> user_id
}
class oc_flow_checks{
 *INTEGER id NOT NULL
   VARCHAR<256> class NOT NULL
   VARCHAR<32> hash NOT NULL
   VARCHAR<16> operator NOT NULL
   TEXT value
}
class oc_flow_operations{
 *INTEGER id NOT NULL
   TEXT checks
   VARCHAR<256> class NOT NULL
   VARCHAR<256> entity NOT NULL
   TEXT events NOT NULL
   VARCHAR<256> name
   TEXT operation
}
class oc_flow_operations_scope{
 *BIGINT id NOT NULL
   INTEGER operation_id NOT NULL
   INTEGER type NOT NULL
   VARCHAR<64> value
}


-->
![](https://mermaid.ink/img/Y2xhc3NEaWFncmFtCmNsYXNzIG9jX21pZ3JhdGlvbnN7CiAqVkFSQ0hBUjwyNTU-IGFwcCBOT1QgTlVMTAogICAqVkFSQ0hBUjwyNTU-IHZlcnNpb24gTk9UIE5VTEwKfQpjbGFzcyBvY19hcHBjb25maWd7CiAqVkFSQ0hBUjwzMj4gYXBwaWQgTk9UIE5VTEwKICAgKlZBUkNIQVI8NjQ-IGNvbmZpZ2tleSBOT1QgTlVMTAogICBURVhUIGNvbmZpZ3ZhbHVlCiAgIFNNQUxMSU5UIGxhenkgTk9UIE5VTEwKICAgSU5URUdFUiB0eXBlIE5PVCBOVUxMCn0KY2xhc3Mgb2Nfc3RvcmFnZXN7CiAqQklHSU5UIG51bWVyaWNfaWQgTk9UIE5VTEwKICAgSU5URUdFUiBhdmFpbGFibGUgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gaWQKICAgSU5URUdFUiBsYXN0X2NoZWNrZWQKfQpjbGFzcyBvY19tb3VudHN7CiAqQklHSU5UIGlkIE5PVCBOVUxMCiAgIEJJR0lOVCBtb3VudF9pZAogICBWQVJDSEFSPDQwMDA-IG1vdW50X3BvaW50IE5PVCBOVUxMCiAgIFZBUkNIQVI8MzI-IG1vdW50X3BvaW50X2hhc2ggTk9UIE5VTEwKICAgVkFSQ0hBUjwxMjg-IG1vdW50X3Byb3ZpZGVyX2NsYXNzCiAgIEJJR0lOVCByb290X2lkIE5PVCBOVUxMCiAgIEJJR0lOVCBzdG9yYWdlX2lkIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IHVzZXJfaWQgTk9UIE5VTEwKfQpjbGFzcyBvY19taW1ldHlwZXN7CiAqQklHSU5UIGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiBtaW1ldHlwZSBOT1QgTlVMTAp9CmNsYXNzIG9jX2ZpbGVjYWNoZXsKICpCSUdJTlQgZmlsZWlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiBjaGVja3N1bQogICBJTlRFR0VSIGVuY3J5cHRlZCBOT1QgTlVMTAogICBWQVJDSEFSPDQwPiBldGFnCiAgIEJJR0lOVCBtaW1lcGFydCBOT1QgTlVMTAogICBCSUdJTlQgbWltZXR5cGUgTk9UIE5VTEwKICAgQklHSU5UIG10aW1lIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjUwPiBuYW1lCiAgIEJJR0lOVCBwYXJlbnQgTk9UIE5VTEwKICAgVkFSQ0hBUjw0MDAwPiBwYXRoCiAgIFZBUkNIQVI8MzI-IHBhdGhfaGFzaCBOT1QgTlVMTAogICBJTlRFR0VSIHBlcm1pc3Npb25zCiAgIEJJR0lOVCBzaXplIE5PVCBOVUxMCiAgIEJJR0lOVCBzdG9yYWdlIE5PVCBOVUxMCiAgIEJJR0lOVCBzdG9yYWdlX210aW1lIE5PVCBOVUxMCiAgIEJJR0lOVCB1bmVuY3J5cHRlZF9zaXplIE5PVCBOVUxMCn0KY2xhc3Mgb2NfZ3JvdXBfdXNlcnsKICpWQVJDSEFSPDY0PiBnaWQgTk9UIE5VTEwKICAgKlZBUkNIQVI8NjQ-IHVpZCBOT1QgTlVMTAp9CmNsYXNzIG9jX2dyb3VwX2FkbWluewogKlZBUkNIQVI8NjQ-IGdpZCBOT1QgTlVMTAogICAqVkFSQ0hBUjw2ND4gdWlkIE5PVCBOVUxMCn0KY2xhc3Mgb2NfZ3JvdXBzewogKlZBUkNIQVI8NjQ-IGdpZCBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gZGlzcGxheW5hbWUgTk9UIE5VTEwKfQpjbGFzcyBvY19wcmVmZXJlbmNlc3sKICpWQVJDSEFSPDMyPiBhcHBpZCBOT1QgTlVMTAogICAqVkFSQ0hBUjw2ND4gY29uZmlna2V5IE5PVCBOVUxMCiAgICpWQVJDSEFSPDY0PiB1c2VyaWQgTk9UIE5VTEwKICAgVEVYVCBjb25maWd2YWx1ZQogICBJTlRFR0VSIGZsYWdzIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IGluZGV4ZWQKICAgU01BTExJTlQgbGF6eSBOT1QgTlVMTAogICBTTUFMTElOVCB0eXBlIE5PVCBOVUxMCn0KY2xhc3Mgb2NfcHJvcGVydGllc3sKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IHByb3BlcnR5bmFtZSBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gcHJvcGVydHlwYXRoIE5PVCBOVUxMCiAgIFRFWFQgcHJvcGVydHl2YWx1ZSBOT1QgTlVMTAogICBWQVJDSEFSPDY0PiB1c2VyaWQgTk9UIE5VTEwKICAgU01BTExJTlQgdmFsdWV0eXBlCn0KY2xhc3Mgb2Nfam9ic3sKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgVEVYVCBhcmd1bWVudCBOT1QgTlVMTAogICBWQVJDSEFSPDY0PiBhcmd1bWVudF9oYXNoCiAgIFZBUkNIQVI8MjU1PiBjbGFzcyBOT1QgTlVMTAogICBJTlRFR0VSIGV4ZWN1dGlvbl9kdXJhdGlvbgogICBJTlRFR0VSIGxhc3RfY2hlY2tlZAogICBJTlRFR0VSIGxhc3RfcnVuCiAgIElOVEVHRVIgcmVzZXJ2ZWRfYXQKICAgU01BTExJTlQgdGltZV9zZW5zaXRpdmUgTk9UIE5VTEwKfQpjbGFzcyBvY191c2Vyc3sKICpWQVJDSEFSPDY0PiB1aWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gZGlzcGxheW5hbWUKICAgVkFSQ0hBUjwyNTU-IHBhc3N3b3JkIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IHVpZF9sb3dlcgp9CmNsYXNzIG9jX2F1dGh0b2tlbnsKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgSU5URUdFUiBleHBpcmVzCiAgIElOVEVHRVIgbGFzdF9hY3Rpdml0eQogICBJTlRFR0VSIGxhc3RfY2hlY2sKICAgVkFSQ0hBUjwyNTU-IGxvZ2luX25hbWUgTk9UIE5VTEwKICAgVEVYVCBuYW1lIE5PVCBOVUxMCiAgIFRFWFQgcGFzc3dvcmQKICAgVkFSQ0hBUjwyNTU-IHBhc3N3b3JkX2hhc2gKICAgQk9PTEVBTiBwYXNzd29yZF9pbnZhbGlkCiAgIFRFWFQgcHJpdmF0ZV9rZXkKICAgVEVYVCBwdWJsaWNfa2V5CiAgIFNNQUxMSU5UIHJlbWVtYmVyCiAgIFRFWFQgc2NvcGUKICAgVkFSQ0hBUjwyMDA-IHRva2VuIE5PVCBOVUxMCiAgIFNNQUxMSU5UIHR5cGUKICAgVkFSQ0hBUjw2ND4gdWlkIE5PVCBOVUxMCiAgIFNNQUxMSU5UIHZlcnNpb24gTk9UIE5VTEwKfQpjbGFzcyBvY19zaGFyZXsKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgU01BTExJTlQgYWNjZXB0ZWQgTk9UIE5VTEwKICAgSlNPTiBhdHRyaWJ1dGVzCiAgIFRJTUVTVEFNUCBleHBpcmF0aW9uCiAgIEJJR0lOVCBmaWxlX3NvdXJjZQogICBWQVJDSEFSPDUxMj4gZmlsZV90YXJnZXQKICAgU01BTExJTlQgaGlkZV9kb3dubG9hZAogICBWQVJDSEFSPDI1NT4gaXRlbV9zb3VyY2UKICAgVkFSQ0hBUjwyNTU-IGl0ZW1fdGFyZ2V0CiAgIFZBUkNIQVI8NjQ-IGl0ZW1fdHlwZSBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gbGFiZWwKICAgU01BTExJTlQgbWFpbF9zZW5kIE5PVCBOVUxMCiAgIFRFWFQgbm90ZQogICBCSUdJTlQgcGFyZW50CiAgIFZBUkNIQVI8MjU1PiBwYXNzd29yZAogICBCT09MRUFOIHBhc3N3b3JkX2J5X3RhbGsKICAgVElNRVNUQU1QIHBhc3N3b3JkX2V4cGlyYXRpb25fdGltZQogICBTTUFMTElOVCBwZXJtaXNzaW9ucyBOT1QgTlVMTAogICBCT09MRUFOIHJlbWluZGVyX3NlbnQKICAgVkFSQ0hBUjw2ND4gc2hhcmVfbmFtZQogICBTTUFMTElOVCBzaGFyZV90eXBlIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiBzaGFyZV93aXRoCiAgIEJJR0lOVCBzdGltZSBOT1QgTlVMTAogICBWQVJDSEFSPDMyPiB0b2tlbgogICBWQVJDSEFSPDY0PiB1aWRfaW5pdGlhdG9yCiAgIFZBUkNIQVI8NjQ-IHVpZF9vd25lciBOT1QgTlVMTAp9CmNsYXNzIG9jX2JydXRlZm9yY2VfYXR0ZW1wdHN7CiAqQklHSU5UIGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IGFjdGlvbiBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gaXAgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IG1ldGFkYXRhIE5PVCBOVUxMCiAgIElOVEVHRVIgb2NjdXJyZWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IHN1Ym5ldCBOT1QgTlVMTAp9CmNsYXNzIG9jX3ZjYXRlZ29yeXsKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IGNhdGVnb3J5IE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IHR5cGUgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gdWlkIE5PVCBOVUxMCn0KY2xhc3Mgb2NfdmNhdGVnb3J5X3RvX29iamVjdHsKICpCSUdJTlQgY2F0ZWdvcnlpZCBOT1QgTlVMTAogICAqQklHSU5UIG9iamlkIE5PVCBOVUxMCiAgICpWQVJDSEFSPDY0PiB0eXBlIE5PVCBOVUxMCn0KY2xhc3Mgb2Nfc3lzdGVtdGFnX29iamVjdF9tYXBwaW5newogKlZBUkNIQVI8NjQ-IG9iamVjdGlkIE5PVCBOVUxMCiAgICpWQVJDSEFSPDY0PiBvYmplY3R0eXBlIE5PVCBOVUxMCiAgICpCSUdJTlQgc3lzdGVtdGFnaWQgTk9UIE5VTEwKfQpjbGFzcyBvY19zeXN0ZW10YWdfZ3JvdXB7CiAqVkFSQ0hBUjwyNTU-IGdpZCBOT1QgTlVMTAogICAqQklHSU5UIHN5c3RlbXRhZ2lkIE5PVCBOVUxMCn0KY2xhc3Mgb2NfZmlsZV9sb2Nrc3sKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4ga2V5IE5PVCBOVUxMCiAgIElOVEVHRVIgbG9jayBOT1QgTlVMTAogICBJTlRFR0VSIHR0bCBOT1QgTlVMTAp9CmNsYXNzIG9jX2NvbW1lbnRzewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDY0PiBhY3Rvcl9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDY0PiBhY3Rvcl90eXBlIE5PVCBOVUxMCiAgIElOVEVHRVIgY2hpbGRyZW5fY291bnQgTk9UIE5VTEwKICAgVElNRVNUQU1QIGNyZWF0aW9uX3RpbWVzdGFtcAogICBUSU1FU1RBTVAgZXhwaXJlX2RhdGUKICAgVElNRVNUQU1QIGxhdGVzdF9jaGlsZF90aW1lc3RhbXAKICAgVEVYVCBtZXNzYWdlCiAgIFRFWFQgbWV0YV9kYXRhCiAgIFZBUkNIQVI8NjQ-IG9iamVjdF9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDY0PiBvYmplY3RfdHlwZSBOT1QgTlVMTAogICBCSUdJTlQgcGFyZW50X2lkIE5PVCBOVUxMCiAgIFZBUkNIQVI8NDAwMD4gcmVhY3Rpb25zCiAgIFZBUkNIQVI8NjQ-IHJlZmVyZW5jZV9pZAogICBCSUdJTlQgdG9wbW9zdF9wYXJlbnRfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gdmVyYgp9CmNsYXNzIG9jX2NvbW1lbnRzX3JlYWRfbWFya2Vyc3sKICpWQVJDSEFSPDY0PiBvYmplY3RfaWQgTk9UIE5VTEwKICAgKlZBUkNIQVI8NjQ-IG9iamVjdF90eXBlIE5PVCBOVUxMCiAgICpWQVJDSEFSPDY0PiB1c2VyX2lkIE5PVCBOVUxMCiAgIFRJTUVTVEFNUCBtYXJrZXJfZGF0ZXRpbWUKfQpjbGFzcyBvY19hY2NvdW50c3sKICpWQVJDSEFSPDY0PiB1aWQgTk9UIE5VTEwKICAgVEVYVCBkYXRhIE5PVCBOVUxMCn0KY2xhc3Mgb2NfdHdvZmFjdG9yX3Byb3ZpZGVyc3sKICpWQVJDSEFSPDMyPiBwcm92aWRlcl9pZCBOT1QgTlVMTAogICAqVkFSQ0hBUjw2ND4gdWlkIE5PVCBOVUxMCiAgIFNNQUxMSU5UIGVuYWJsZWQgTk9UIE5VTEwKfQpjbGFzcyBvY19jb2xscmVzX2NvbGxlY3Rpb25zewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDY0PiBuYW1lIE5PVCBOVUxMCn0KY2xhc3Mgb2NfY29sbHJlc19yZXNvdXJjZXN7CiAqQklHSU5UIGNvbGxlY3Rpb25faWQgTk9UIE5VTEwKICAgKlZBUkNIQVI8NjQ-IHJlc291cmNlX2lkIE5PVCBOVUxMCiAgICpWQVJDSEFSPDY0PiByZXNvdXJjZV90eXBlIE5PVCBOVUxMCn0KY2xhc3Mgb2NfY29sbHJlc19hY2Nlc3NjYWNoZXsKICpCSUdJTlQgY29sbGVjdGlvbl9pZCBOT1QgTlVMTAogICAqVkFSQ0hBUjw2ND4gcmVzb3VyY2VfaWQgTk9UIE5VTEwKICAgKlZBUkNIQVI8NjQ-IHJlc291cmNlX3R5cGUgTk9UIE5VTEwKICAgKlZBUkNIQVI8NjQ-IHVzZXJfaWQgTk9UIE5VTEwKICAgQk9PTEVBTiBhY2Nlc3MKfQpjbGFzcyBvY19sb2dpbl9mbG93X3YyewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDEwMjQ-IGFwcF9wYXNzd29yZAogICBWQVJDSEFSPDI1NT4gY2xpZW50X25hbWUgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IGxvZ2luX25hbWUKICAgVkFSQ0hBUjwyNTU-IGxvZ2luX3Rva2VuIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiBwb2xsX3Rva2VuIE5PVCBOVUxMCiAgIFRFWFQgcHJpdmF0ZV9rZXkgTk9UIE5VTEwKICAgVEVYVCBwdWJsaWNfa2V5IE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiBzZXJ2ZXIKICAgU01BTExJTlQgc3RhcnRlZCBOT1QgTlVMTAogICBCSUdJTlQgdGltZXN0YW1wIE5PVCBOVUxMCn0KY2xhc3Mgb2NfZmlsZWNhY2hlX2V4dGVuZGVkewogKkJJR0lOVCBmaWxlaWQgTk9UIE5VTEwKICAgQklHSU5UIGNyZWF0aW9uX3RpbWUgTk9UIE5VTEwKICAgVkFSQ0hBUjw0MD4gbWV0YWRhdGFfZXRhZwogICBCSUdJTlQgdXBsb2FkX3RpbWUgTk9UIE5VTEwKfQpjbGFzcyBvY19kaXJlY3RfZWRpdHsKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgQk9PTEVBTiBhY2Nlc3NlZAogICBWQVJDSEFSPDY0PiBlZGl0b3JfaWQgTk9UIE5VTEwKICAgQklHSU5UIGZpbGVfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw0MDAwPiBmaWxlX3BhdGgKICAgQklHSU5UIHNoYXJlX2lkCiAgIEJJR0lOVCB0aW1lc3RhbXAgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gdG9rZW4gTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gdXNlcl9pZAp9CmNsYXNzIG9jX3dlYmF1dGhuewogKklOVEVHRVIgaWQgTk9UIE5VTEwKICAgVEVYVCBkYXRhIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IG5hbWUgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MTI-IHB1YmxpY19rZXlfY3JlZGVudGlhbF9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDY0PiB1aWQgTk9UIE5VTEwKICAgQk9PTEVBTiB1c2VyX3ZlcmlmaWNhdGlvbgp9CmNsYXNzIG9jX3N0b3JhZ2VzX2NyZWRlbnRpYWxzewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBURVhUIGNyZWRlbnRpYWxzCiAgIFZBUkNIQVI8NjQ-IGlkZW50aWZpZXIgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gdXNlcgp9CmNsYXNzIG9jX2FjY291bnRzX2RhdGF7CiAqQklHSU5UIGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IG5hbWUgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gdWlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiB2YWx1ZQp9CmNsYXNzIG9jX2tub3duX3VzZXJzewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4ga25vd25fdG8gTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IGtub3duX3VzZXIgTk9UIE5VTEwKfQpjbGFzcyBvY19hdXRob3JpemVkX2dyb3Vwc3sKICpJTlRFR0VSIGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjAwPiBjbGFzcyBOT1QgTlVMTAogICBWQVJDSEFSPDIwMD4gZ3JvdXBfaWQgTk9UIE5VTEwKfQpjbGFzcyBvY19wcm9maWxlX2NvbmZpZ3sKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgVEVYVCBjb25maWcgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gdXNlcl9pZCBOT1QgTlVMTAp9CmNsYXNzIG9jX3JhdGVsaW1pdF9lbnRyaWVzewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBUSU1FU1RBTVAgZGVsZXRlX2FmdGVyIE5PVCBOVUxMCiAgIFZBUkNIQVI8MTI4PiBoYXNoIE5PVCBOVUxMCn0KY2xhc3Mgb2NfcmVhY3Rpb25zewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDY0PiBhY3Rvcl9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDY0PiBhY3Rvcl90eXBlIE5PVCBOVUxMCiAgIEJJR0lOVCBtZXNzYWdlX2lkIE5PVCBOVUxMCiAgIEJJR0lOVCBwYXJlbnRfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwzMj4gcmVhY3Rpb24gTk9UIE5VTEwKfQpjbGFzcyBvY190ZXh0cHJvY2Vzc2luZ190YXNrc3sKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwzMj4gYXBwX2lkIE5PVCBOVUxMCiAgIFRJTUVTVEFNUCBjb21wbGV0aW9uX2V4cGVjdGVkX2F0CiAgIFZBUkNIQVI8MjU1PiBpZGVudGlmaWVyIE5PVCBOVUxMCiAgIFRFWFQgaW5wdXQgTk9UIE5VTEwKICAgSU5URUdFUiBsYXN0X3VwZGF0ZWQKICAgVEVYVCBvdXRwdXQKICAgSU5URUdFUiBzdGF0dXMKICAgVkFSQ0hBUjwyNTU-IHR5cGUgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gdXNlcl9pZAp9CmNsYXNzIG9jX3RleHQyaW1hZ2VfdGFza3N7CiAqQklHSU5UIGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MzI-IGFwcF9pZCBOT1QgTlVMTAogICBUSU1FU1RBTVAgY29tcGxldGlvbl9leHBlY3RlZF9hdAogICBWQVJDSEFSPDI1NT4gaWRlbnRpZmllcgogICBURVhUIGlucHV0IE5PVCBOVUxMCiAgIFRJTUVTVEFNUCBsYXN0X3VwZGF0ZWQKICAgSU5URUdFUiBudW1iZXJfb2ZfaW1hZ2VzIE5PVCBOVUxMCiAgIElOVEVHRVIgc3RhdHVzCiAgIFZBUkNIQVI8NjQ-IHVzZXJfaWQKfQpjbGFzcyBvY19maWxlc19tZXRhZGF0YXsKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgQklHSU5UIGZpbGVfaWQgTk9UIE5VTEwKICAgVEVYVCBqc29uIE5PVCBOVUxMCiAgIFRJTUVTVEFNUCBsYXN0X3VwZGF0ZSBOT1QgTlVMTAogICBWQVJDSEFSPDE1PiBzeW5jX3Rva2VuIE5PVCBOVUxMCn0KY2xhc3Mgb2NfZmlsZXNfbWV0YWRhdGFfaW5kZXh7CiAqQklHSU5UIGlkIE5PVCBOVUxMCiAgIEJJR0lOVCBmaWxlX2lkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MzE-IG1ldGFfa2V5CiAgIEJJR0lOVCBtZXRhX3ZhbHVlX2ludAogICBWQVJDSEFSPDYzPiBtZXRhX3ZhbHVlX3N0cmluZwp9CmNsYXNzIG9jX3Rhc2twcm9jZXNzaW5nX3Rhc2tzewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBTTUFMTElOVCBhbGxvd19jbGVhbnVwIE5PVCBOVUxMCiAgIFZBUkNIQVI8MzI-IGFwcF9pZCBOT1QgTlVMTAogICBUSU1FU1RBTVAgY29tcGxldGlvbl9leHBlY3RlZF9hdAogICBWQVJDSEFSPDI1NT4gY3VzdG9tX2lkCiAgIElOVEVHRVIgZW5kZWRfYXQKICAgVkFSQ0hBUjw0MDAwPiBlcnJvcl9tZXNzYWdlCiAgIFNNQUxMSU5UIGluY2x1ZGVfd2F0ZXJtYXJrIE5PVCBOVUxMCiAgIFRFWFQgaW5wdXQgTk9UIE5VTEwKICAgSU5URUdFUiBsYXN0X3VwZGF0ZWQKICAgVEVYVCBvdXRwdXQKICAgRE9VQkxFIFBSRUNJU0lPTiBwcm9ncmVzcwogICBJTlRFR0VSIHNjaGVkdWxlZF9hdAogICBJTlRFR0VSIHN0YXJ0ZWRfYXQKICAgSU5URUdFUiBzdGF0dXMKICAgVkFSQ0hBUjwyNTU-IHR5cGUgTk9UIE5VTEwKICAgVkFSQ0hBUjw0MDAwPiB1c2VyX2ZhY2luZ19lcnJvcl9tZXNzYWdlCiAgIFZBUkNIQVI8NjQ-IHVzZXJfaWQKICAgVkFSQ0hBUjw2ND4gd2ViaG9va19tZXRob2QKICAgVkFSQ0hBUjw0MDAwPiB3ZWJob29rX3VyaQp9CmNsYXNzIG9jX3NlY19zaWduYXRvcnl7CiAqQklHSU5UIGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MTI3PiBhY2NvdW50CiAgIElOVEVHRVIgY3JlYXRpb24KICAgVkFSQ0hBUjw1MTI-IGhvc3QgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MTI-IGtleV9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDEyNz4ga2V5X2lkX3N1bSBOT1QgTlVMTAogICBJTlRFR0VSIGxhc3RfdXBkYXRlZAogICBURVhUIG1ldGFkYXRhIE5PVCBOVUxMCiAgIFZBUkNIQVI8MzE-IHByb3ZpZGVyX2lkIE5PVCBOVUxMCiAgIFRFWFQgcHVibGljX2tleSBOT1QgTlVMTAogICBTTUFMTElOVCBzdGF0dXMgTk9UIE5VTEwKICAgU01BTExJTlQgdHlwZSBOT1QgTlVMTAp9CmNsYXNzIG9jX3ByZXZpZXdfbG9jYXRpb25zewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDQwPiBidWNrZXRfbmFtZSBOT1QgTlVMTAogICBWQVJDSEFSPDQwPiBvYmplY3Rfc3RvcmVfbmFtZSBOT1QgTlVMTAp9CmNsYXNzIG9jX3ByZXZpZXdfdmVyc2lvbnN7CiAqQklHSU5UIGlkIE5PVCBOVUxMCiAgIEJJR0lOVCBmaWxlX2lkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MTAyND4gdmVyc2lvbiBOT1QgTlVMTAp9CmNsYXNzIG9jX3ByZXZpZXdzewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBCT09MRUFOIGNyb3BwZWQgTk9UIE5VTEwKICAgQk9PTEVBTiBlbmNyeXB0ZWQgTk9UIE5VTEwKICAgQ0hBUjw0MD4gZXRhZyBOT1QgTlVMTAogICBCSUdJTlQgZmlsZV9pZCBOT1QgTlVMTAogICBJTlRFR0VSIGhlaWdodCBOT1QgTlVMTAogICBCSUdJTlQgbG9jYXRpb25faWQKICAgQk9PTEVBTiBtYXggTk9UIE5VTEwKICAgSU5URUdFUiBtaW1ldHlwZV9pZCBOT1QgTlVMTAogICBJTlRFR0VSIG10aW1lIE5PVCBOVUxMCiAgIEJJR0lOVCBvbGRfZmlsZV9pZAogICBJTlRFR0VSIHNpemUgTk9UIE5VTEwKICAgSU5URUdFUiBzb3VyY2VfbWltZXR5cGVfaWQgTk9UIE5VTEwKICAgQklHSU5UIHN0b3JhZ2VfaWQgTk9UIE5VTEwKICAgQklHSU5UIHZlcnNpb25faWQgTk9UIE5VTEwKICAgSU5URUdFUiB3aWR0aCBOT1QgTlVMTAp9CmNsYXNzIG9jX2FjdGl2aXR5ewogKkJJR0lOVCBhY3Rpdml0eV9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDY0PiBhZmZlY3RlZHVzZXIgTk9UIE5VTEwKICAgVkFSQ0hBUjwzMj4gYXBwIE5PVCBOVUxMCiAgIFZBUkNIQVI8NDAwMD4gZmlsZQogICBWQVJDSEFSPDQwMDA-IGxpbmsKICAgVkFSQ0hBUjwyNTU-IG1lc3NhZ2UKICAgVEVYVCBtZXNzYWdlcGFyYW1zCiAgIEJJR0lOVCBvYmplY3RfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IG9iamVjdF90eXBlCiAgIElOVEVHRVIgcHJpb3JpdHkgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IHN1YmplY3QgTk9UIE5VTEwKICAgVEVYVCBzdWJqZWN0cGFyYW1zIE5PVCBOVUxMCiAgIElOVEVHRVIgdGltZXN0YW1wIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiB0eXBlCiAgIFZBUkNIQVI8NjQ-IHVzZXIKfQpjbGFzcyBvY19hY3Rpdml0eV9tcXsKICpCSUdJTlQgbWFpbF9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDY0PiBhbXFfYWZmZWN0ZWR1c2VyIE5PVCBOVUxMCiAgIFZBUkNIQVI8MzI-IGFtcV9hcHBpZCBOT1QgTlVMTAogICBJTlRFR0VSIGFtcV9sYXRlc3Rfc2VuZCBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gYW1xX3N1YmplY3QgTk9UIE5VTEwKICAgVEVYVCBhbXFfc3ViamVjdHBhcmFtcwogICBJTlRFR0VSIGFtcV90aW1lc3RhbXAgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IGFtcV90eXBlIE5PVCBOVUxMCiAgIEJJR0lOVCBvYmplY3RfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IG9iamVjdF90eXBlCn0KY2xhc3Mgb2NfYXBwY29uZmlnX2V4ewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDMyPiBhcHBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDY0PiBjb25maWdrZXkgTk9UIE5VTEwKICAgVEVYVCBjb25maWd2YWx1ZQogICBTTUFMTElOVCBzZW5zaXRpdmUgTk9UIE5VTEwKfQpjbGFzcyBvY19leF9hcHBzewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDMyPiBhcHBpZCBOT1QgTlVMTAogICBCSUdJTlQgY3JlYXRlZF90aW1lIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IGRhZW1vbl9jb25maWdfbmFtZSBOT1QgTlVMTAogICBTTUFMTElOVCBlbmFibGVkIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IG5hbWUgTk9UIE5VTEwKICAgU01BTExJTlQgcG9ydCBOT1QgTlVMTAogICBWQVJDSEFSPDI1Nj4gc2VjcmV0IE5PVCBOVUxMCiAgIEpTT04gc3RhdHVzIE5PVCBOVUxMCiAgIFZBUkNIQVI8MzI-IHZlcnNpb24gTk9UIE5VTEwKfQpjbGFzcyBvY19leF9hcHBzX2RhZW1vbnN7CiAqQklHSU5UIGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IGFjY2VwdHNfZGVwbG95X2lkIE5PVCBOVUxMCiAgIEpTT04gZGVwbG95X2NvbmZpZyBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gZGlzcGxheV9uYW1lIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiBob3N0IE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IG5hbWUgTk9UIE5VTEwKICAgVkFSQ0hBUjwzMj4gcHJvdG9jb2wgTk9UIE5VTEwKfQpjbGFzcyBvY19wcmVmZXJlbmNlc19leHsKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwzMj4gYXBwaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gY29uZmlna2V5IE5PVCBOVUxMCiAgIFRFWFQgY29uZmlndmFsdWUKICAgU01BTExJTlQgc2Vuc2l0aXZlIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IHVzZXJpZCBOT1QgTlVMTAp9CmNsYXNzIG9jX2V4X3VpX3RvcF9tZW51ewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBTTUFMTElOVCBhZG1pbl9yZXF1aXJlZCBOT1QgTlVMTAogICBWQVJDSEFSPDMyPiBhcHBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDMyPiBkaXNwbGF5X25hbWUgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IGljb24KICAgVkFSQ0hBUjwzMj4gbmFtZSBOT1QgTlVMTAp9CmNsYXNzIG9jX2V4X3VpX3N0YXRlc3sKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwzMj4gYXBwaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4ga2V5IE5PVCBOVUxMCiAgIFZBUkNIQVI8MzI-IG5hbWUgTk9UIE5VTEwKICAgVkFSQ0hBUjwxNj4gdHlwZSBOT1QgTlVMTAogICBKU09OIHZhbHVlIE5PVCBOVUxMCn0KY2xhc3Mgb2NfZXhfdWlfc2NyaXB0c3sKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwzMj4gYWZ0ZXJfYXBwX2lkCiAgIFZBUkNIQVI8MzI-IGFwcGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MzI-IG5hbWUgTk9UIE5VTEwKICAgVkFSQ0hBUjw0MTA-IHBhdGggTk9UIE5VTEwKICAgVkFSQ0hBUjwxNj4gdHlwZSBOT1QgTlVMTAp9CmNsYXNzIG9jX2V4X3VpX3N0eWxlc3sKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwzMj4gYXBwaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwzMj4gbmFtZSBOT1QgTlVMTAogICBWQVJDSEFSPDQxMD4gcGF0aCBOT1QgTlVMTAogICBWQVJDSEFSPDE2PiB0eXBlIE5PVCBOVUxMCn0KY2xhc3Mgb2NfZXhfdWlfZmlsZXNfYWN0aW9uc3sKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gYWN0aW9uX2hhbmRsZXIgTk9UIE5VTEwKICAgVkFSQ0hBUjwzMj4gYXBwaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gZGlzcGxheV9uYW1lIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiBpY29uCiAgIFRFWFQgbWltZSBOT1QgTlVMTAogICBWQVJDSEFSPDY0PiBuYW1lIE5PVCBOVUxMCiAgIEJJR0lOVCBvcmRlciBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gcGVybWlzc2lvbnMgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gdmVyc2lvbiBOT1QgTlVMTAp9CmNsYXNzIG9jX2V4X3NldHRpbmdzX2Zvcm1zewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDMyPiBhcHBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDY0PiBmb3JtaWQgTk9UIE5VTEwKICAgSlNPTiBzY2hlbWUgTk9UIE5VTEwKfQpjbGFzcyBvY19leF9vY2NfY29tbWFuZHN7CiAqQklHSU5UIGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MzI-IGFwcGlkIE5PVCBOVUxMCiAgIEpTT04gYXJndW1lbnRzIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiBkZXNjcmlwdGlvbgogICBWQVJDSEFSPDQxMD4gZXhlY3V0ZV9oYW5kbGVyIE5PVCBOVUxMCiAgIFNNQUxMSU5UIGhpZGRlbiBOT1QgTlVMTAogICBWQVJDSEFSPDY0PiBuYW1lIE5PVCBOVUxMCiAgIEpTT04gb3B0aW9ucyBOT1QgTlVMTAogICBKU09OIHVzYWdlcyBOT1QgTlVMTAp9CmNsYXNzIG9jX2V4X3Rhc2tfcHJvY2Vzc2luZ3sKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwzMj4gYXBwX2lkIE5PVCBOVUxMCiAgIFRFWFQgY3VzdG9tX3Rhc2tfdHlwZQogICBWQVJDSEFSPDI1NT4gZGlzcGxheV9uYW1lIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiBuYW1lIE5PVCBOVUxMCiAgIFRFWFQgcHJvdmlkZXIgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IHRhc2tfdHlwZSBOT1QgTlVMTAp9CmNsYXNzIG9jX2V4X2FwcHNfcm91dGVzewogKklOVEVHRVIgaWQgTk9UIE5VTEwKICAgSU5URUdFUiBhY2Nlc3NfbGV2ZWwgTk9UIE5VTEwKICAgVkFSQ0hBUjwzMj4gYXBwaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MTI-IGJydXRlZm9yY2VfcHJvdGVjdGlvbgogICBWQVJDSEFSPDUxMj4gaGVhZGVyc190b19leGNsdWRlCiAgIFZBUkNIQVI8NTEyPiB1cmwgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gdmVyYiBOT1QgTlVMTAp9CmNsYXNzIG9jX2V4X2RlcGxveV9vcHRpb25zewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDMyPiBhcHBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDMyPiB0eXBlIE5PVCBOVUxMCiAgIEpTT04gdmFsdWUgTk9UIE5VTEwKfQpjbGFzcyBvY19jaXJjbGVzX2NpcmNsZXsKICpJTlRFR0VSIGlkIE5PVCBOVUxMCiAgIElOVEVHRVIgY29uZmlnCiAgIElOVEVHRVIgY29udGFjdF9hZGRyZXNzYm9vawogICBWQVJDSEFSPDEyNz4gY29udGFjdF9ncm91cG5hbWUKICAgVElNRVNUQU1QIGNyZWF0aW9uCiAgIFRFWFQgZGVzY3JpcHRpb24KICAgVkFSQ0hBUjwyNTU-IGRpc3BsYXlfbmFtZQogICBWQVJDSEFSPDI1NT4gaW5zdGFuY2UKICAgVkFSQ0hBUjwxMjc-IG5hbWUgTk9UIE5VTEwKICAgVkFSQ0hBUjwxMjc-IHNhbml0aXplZF9uYW1lCiAgIFRFWFQgc2V0dGluZ3MKICAgSU5URUdFUiBzb3VyY2UKICAgVkFSQ0hBUjwzMT4gdW5pcXVlX2lkIE5PVCBOVUxMCn0KY2xhc3Mgb2NfY2lyY2xlc19tZW1iZXJ7CiAqSU5URUdFUiBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gY2FjaGVkX25hbWUKICAgVElNRVNUQU1QIGNhY2hlZF91cGRhdGUKICAgVkFSQ0hBUjwzMT4gY2lyY2xlX2lkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MTI3PiBjb250YWN0X2lkCiAgIFRFWFQgY29udGFjdF9tZXRhCiAgIFZBUkNIQVI8MjU1PiBpbnN0YW5jZQogICBWQVJDSEFSPDMxPiBpbnZpdGVkX2J5CiAgIFRJTUVTVEFNUCBqb2luZWQKICAgU01BTExJTlQgbGV2ZWwgTk9UIE5VTEwKICAgVkFSQ0hBUjwzMT4gbWVtYmVyX2lkCiAgIFRFWFQgbm90ZQogICBWQVJDSEFSPDMxPiBzaW5nbGVfaWQKICAgVkFSQ0hBUjwxNT4gc3RhdHVzCiAgIFZBUkNIQVI8MTI3PiB1c2VyX2lkIE5PVCBOVUxMCiAgIFNNQUxMSU5UIHVzZXJfdHlwZSBOT1QgTlVMTAp9CmNsYXNzIG9jX2NpcmNsZXNfcmVtb3RlewogKklOVEVHRVIgaWQgTk9UIE5VTEwKICAgVElNRVNUQU1QIGNyZWF0aW9uCiAgIFZBUkNIQVI8MjU0PiBocmVmCiAgIFZBUkNIQVI8MTI3PiBpbnN0YW5jZQogICBJTlRFR0VSIGludGVyZmFjZSBOT1QgTlVMTAogICBURVhUIGl0ZW0KICAgVkFSQ0hBUjwxNT4gdHlwZSBOT1QgTlVMTAogICBWQVJDSEFSPDIwPiB1aWQKfQpjbGFzcyBvY19jaXJjbGVzX21lbWJlcnNoaXB7CiAqVkFSQ0hBUjwzMT4gY2lyY2xlX2lkIE5PVCBOVUxMCiAgICpWQVJDSEFSPDMxPiBzaW5nbGVfaWQgTk9UIE5VTEwKICAgSU5URUdFUiBpbmhlcml0YW5jZV9kZXB0aCBOT1QgTlVMTAogICBWQVJDSEFSPDMxPiBpbmhlcml0YW5jZV9maXJzdCBOT1QgTlVMTAogICBWQVJDSEFSPDMxPiBpbmhlcml0YW5jZV9sYXN0IE5PVCBOVUxMCiAgIFRFWFQgaW5oZXJpdGFuY2VfcGF0aCBOT1QgTlVMTAogICBJTlRFR0VSIGxldmVsIE5PVCBOVUxMCn0KY2xhc3Mgb2NfY2lyY2xlc190b2tlbnsKICpJTlRFR0VSIGlkIE5PVCBOVUxMCiAgIElOVEVHRVIgYWNjZXB0ZWQKICAgVkFSQ0hBUjwzMT4gY2lyY2xlX2lkCiAgIFZBUkNIQVI8MzE-IG1lbWJlcl9pZAogICBWQVJDSEFSPDEyNz4gcGFzc3dvcmQKICAgSU5URUdFUiBzaGFyZV9pZAogICBWQVJDSEFSPDMxPiBzaW5nbGVfaWQKICAgVkFSQ0hBUjwzMT4gdG9rZW4KfQpjbGFzcyBvY19jaXJjbGVzX21vdW50ewogKklOVEVHRVIgaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwzMT4gY2lyY2xlX2lkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MzE-IG1vdW50X2lkIE5PVCBOVUxMCiAgIFRFWFQgbW91bnRwb2ludAogICBWQVJDSEFSPDY0PiBtb3VudHBvaW50X2hhc2gKICAgSU5URUdFUiBwYXJlbnQKICAgVkFSQ0hBUjwyNTU-IHJlbW90ZQogICBJTlRFR0VSIHJlbW90ZV9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDMxPiBzaW5nbGVfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw2Mz4gdG9rZW4KfQpjbGFzcyBvY19jaXJjbGVzX21vdW50cG9pbnR7CiAqSU5URUdFUiBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDMxPiBtb3VudF9pZCBOT1QgTlVMTAogICBURVhUIG1vdW50cG9pbnQKICAgVkFSQ0hBUjw2ND4gbW91bnRwb2ludF9oYXNoCiAgIFZBUkNIQVI8MzE-IHNpbmdsZV9pZCBOT1QgTlVMTAp9CmNsYXNzIG9jX2NpcmNsZXNfc2hhcmVfbG9ja3sKICpJTlRFR0VSIGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MzE-IGNpcmNsZV9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDEyNz4gaW5zdGFuY2UgTk9UIE5VTEwKICAgVkFSQ0hBUjwzMT4gaXRlbV9pZCBOT1QgTlVMTAp9CmNsYXNzIG9jX2NpcmNsZXNfZXZlbnR7CiAqVkFSQ0hBUjwyNTU-IGluc3RhbmNlIE5PVCBOVUxMCiAgICpWQVJDSEFSPDYzPiB0b2tlbiBOT1QgTlVMTAogICBCSUdJTlQgY3JlYXRpb24KICAgVEVYVCBldmVudAogICBJTlRFR0VSIGludGVyZmFjZSBOT1QgTlVMTAogICBURVhUIHJlc3VsdAogICBJTlRFR0VSIHJldHJ5CiAgIElOVEVHRVIgc2V2ZXJpdHkKICAgSU5URUdFUiBzdGF0dXMKICAgVElNRVNUQU1QIHVwZGF0ZWQKfQpjbGFzcyBvY19mZWRlcmF0ZWRfaW52aXRlc3sKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgQk9PTEVBTiBhY2NlcHRlZAogICBCSUdJTlQgYWNjZXB0ZWRfYXQKICAgQklHSU5UIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgQklHSU5UIGV4cGlyZWRfYXQKICAgVkFSQ0hBUjwzMjA-IHJlY2lwaWVudF9lbWFpbAogICBWQVJDSEFSPDEwMjQ-IHJlY2lwaWVudF9uYW1lCiAgIFZBUkNIQVI8MjA4Mz4gcmVjaXBpZW50X3Byb3ZpZGVyCiAgIFZBUkNIQVI8MTAyND4gcmVjaXBpZW50X3VzZXJfaWQKICAgVkFSQ0hBUjw2MD4gdG9rZW4gTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gdXNlcl9pZCBOT1QgTlVMTAp9CmNsYXNzIG9jX3JlY2VudF9jb250YWN0ewogKklOVEVHRVIgaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gYWN0b3JfdWlkIE5PVCBOVUxMCiAgIEJZVEVBIGNhcmQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IGVtYWlsCiAgIFZBUkNIQVI8MjU1PiBmZWRlcmF0ZWRfY2xvdWRfaWQKICAgSU5URUdFUiBsYXN0X2NvbnRhY3QgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gdWlkCn0KY2xhc3Mgb2NfYWRkcmVzc2Jvb2tzewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gZGVzY3JpcHRpb24KICAgVkFSQ0hBUjwyNTU-IGRpc3BsYXluYW1lCiAgIFZBUkNIQVI8MjU1PiBwcmluY2lwYWx1cmkKICAgSU5URUdFUiBzeW5jdG9rZW4gTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IHVyaQp9CmNsYXNzIG9jX2NhcmRzewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBCSUdJTlQgYWRkcmVzc2Jvb2tpZCBOT1QgTlVMTAogICBCWVRFQSBjYXJkZGF0YQogICBWQVJDSEFSPDMyPiBldGFnCiAgIEJJR0lOVCBsYXN0bW9kaWZpZWQKICAgQklHSU5UIHNpemUgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IHVpZAogICBWQVJDSEFSPDI1NT4gdXJpCn0KY2xhc3Mgb2NfYWRkcmVzc2Jvb2tjaGFuZ2VzewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBCSUdJTlQgYWRkcmVzc2Jvb2tpZCBOT1QgTlVMTAogICBJTlRFR0VSIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgU01BTExJTlQgb3BlcmF0aW9uIE5PVCBOVUxMCiAgIElOVEVHRVIgc3luY3Rva2VuIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiB1cmkKfQpjbGFzcyBvY19jYWxlbmRhcm9iamVjdHN7CiAqQklHSU5UIGlkIE5PVCBOVUxMCiAgIEJZVEVBIGNhbGVuZGFyZGF0YQogICBCSUdJTlQgY2FsZW5kYXJpZCBOT1QgTlVMTAogICBJTlRFR0VSIGNhbGVuZGFydHlwZSBOT1QgTlVMTAogICBJTlRFR0VSIGNsYXNzaWZpY2F0aW9uCiAgIFZBUkNIQVI8OD4gY29tcG9uZW50dHlwZQogICBJTlRFR0VSIGRlbGV0ZWRfYXQKICAgVkFSQ0hBUjwzMj4gZXRhZwogICBCSUdJTlQgZmlyc3RvY2N1cmVuY2UKICAgSU5URUdFUiBsYXN0bW9kaWZpZWQKICAgQklHSU5UIGxhc3RvY2N1cmVuY2UKICAgQklHSU5UIHNpemUgTk9UIE5VTEwKICAgVkFSQ0hBUjw1MTI-IHVpZAogICBWQVJDSEFSPDI1NT4gdXJpCn0KY2xhc3Mgb2NfY2FsZW5kYXJzewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gY2FsZW5kYXJjb2xvcgogICBJTlRFR0VSIGNhbGVuZGFyb3JkZXIgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gY29tcG9uZW50cwogICBJTlRFR0VSIGRlbGV0ZWRfYXQKICAgVkFSQ0hBUjwyNTU-IGRlc2NyaXB0aW9uCiAgIFZBUkNIQVI8MjU1PiBkaXNwbGF5bmFtZQogICBWQVJDSEFSPDI1NT4gcHJpbmNpcGFsdXJpCiAgIElOVEVHRVIgc3luY3Rva2VuIE5PVCBOVUxMCiAgIFRFWFQgdGltZXpvbmUKICAgU01BTExJTlQgdHJhbnNwYXJlbnQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IHVyaQp9CmNsYXNzIG9jX2NhbGVuZGFyY2hhbmdlc3sKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgQklHSU5UIGNhbGVuZGFyaWQgTk9UIE5VTEwKICAgSU5URUdFUiBjYWxlbmRhcnR5cGUgTk9UIE5VTEwKICAgSU5URUdFUiBjcmVhdGVkX2F0IE5PVCBOVUxMCiAgIFNNQUxMSU5UIG9wZXJhdGlvbiBOT1QgTlVMTAogICBJTlRFR0VSIHN5bmN0b2tlbiBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gdXJpCn0KY2xhc3Mgb2NfY2FsZW5kYXJzdWJzY3JpcHRpb25zewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gY2FsZW5kYXJjb2xvcgogICBJTlRFR0VSIGNhbGVuZGFyb3JkZXIgTk9UIE5VTEwKICAgVkFSQ0hBUjwxMDA-IGRpc3BsYXluYW1lCiAgIElOVEVHRVIgbGFzdG1vZGlmaWVkCiAgIFZBUkNIQVI8MjU1PiBwcmluY2lwYWx1cmkKICAgVkFSQ0hBUjwxMD4gcmVmcmVzaHJhdGUKICAgVEVYVCBzb3VyY2UKICAgU01BTExJTlQgc3RyaXBhbGFybXMKICAgU01BTExJTlQgc3RyaXBhdHRhY2htZW50cwogICBTTUFMTElOVCBzdHJpcHRvZG9zCiAgIElOVEVHRVIgc3luY3Rva2VuIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiB1cmkKfQpjbGFzcyBvY19zY2hlZHVsaW5nb2JqZWN0c3sKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgQllURUEgY2FsZW5kYXJkYXRhCiAgIFZBUkNIQVI8MzI-IGV0YWcKICAgSU5URUdFUiBsYXN0bW9kaWZpZWQKICAgVkFSQ0hBUjwyNTU-IHByaW5jaXBhbHVyaQogICBCSUdJTlQgc2l6ZSBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gdXJpCn0KY2xhc3Mgb2NfY2FyZHNfcHJvcGVydGllc3sKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgQklHSU5UIGFkZHJlc3Nib29raWQgTk9UIE5VTEwKICAgQklHSU5UIGNhcmRpZCBOT1QgTlVMTAogICBWQVJDSEFSPDY0PiBuYW1lCiAgIElOVEVHRVIgcHJlZmVycmVkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiB2YWx1ZQp9CmNsYXNzIG9jX2NhbGVuZGFyb2JqZWN0c19wcm9wc3sKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgQklHSU5UIGNhbGVuZGFyaWQgTk9UIE5VTEwKICAgSU5URUdFUiBjYWxlbmRhcnR5cGUgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gbmFtZQogICBCSUdJTlQgb2JqZWN0aWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gcGFyYW1ldGVyCiAgIFZBUkNIQVI8MjU1PiB2YWx1ZQp9CmNsYXNzIG9jX2Rhdl9zaGFyZXN7CiAqQklHSU5UIGlkIE5PVCBOVUxMCiAgIFNNQUxMSU5UIGFjY2VzcwogICBWQVJDSEFSPDI1NT4gcHJpbmNpcGFsdXJpCiAgIFZBUkNIQVI8MjU1PiBwdWJsaWN1cmkKICAgQklHSU5UIHJlc291cmNlaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IHRva2VuCiAgIFZBUkNIQVI8MjU1PiB0eXBlCn0KY2xhc3Mgb2NfZGlyZWN0bGlua3sKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgQklHSU5UIGV4cGlyYXRpb24gTk9UIE5VTEwKICAgQklHSU5UIGZpbGVfaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw2MD4gdG9rZW4KICAgVkFSQ0hBUjw2ND4gdXNlcl9pZAp9CmNsYXNzIG9jX2NhbGVuZGFyX3Jlc291cmNlc3sKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gYmFja2VuZF9pZAogICBWQVJDSEFSPDI1NT4gZGlzcGxheW5hbWUKICAgVkFSQ0hBUjwyNTU-IGVtYWlsCiAgIFZBUkNIQVI8NDAwMD4gZ3JvdXBfcmVzdHJpY3Rpb25zCiAgIFZBUkNIQVI8NjQ-IHJlc291cmNlX2lkCn0KY2xhc3Mgb2NfY2FsZW5kYXJfcm9vbXN7CiAqQklHSU5UIGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IGJhY2tlbmRfaWQKICAgVkFSQ0hBUjwyNTU-IGRpc3BsYXluYW1lCiAgIFZBUkNIQVI8MjU1PiBlbWFpbAogICBWQVJDSEFSPDQwMDA-IGdyb3VwX3Jlc3RyaWN0aW9ucwogICBWQVJDSEFSPDY0PiByZXNvdXJjZV9pZAp9CmNsYXNzIG9jX2NhbGVuZGFyX2ludml0YXRpb25zewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gYXR0ZW5kZWUgTk9UIE5VTEwKICAgQklHSU5UIGV4cGlyYXRpb24gTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IG9yZ2FuaXplciBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gcmVjdXJyZW5jZWlkCiAgIEJJR0lOVCBzZXF1ZW5jZQogICBWQVJDSEFSPDYwPiB0b2tlbiBOT1QgTlVMTAogICBWQVJDSEFSPDUxMj4gdWlkIE5PVCBOVUxMCn0KY2xhc3Mgb2NfY2FsZW5kYXJfcmVzb3VyY2VzX21kewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4ga2V5IE5PVCBOVUxMCiAgIEJJR0lOVCByZXNvdXJjZV9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDQwMDA-IHZhbHVlCn0KY2xhc3Mgb2NfY2FsZW5kYXJfcm9vbXNfbWR7CiAqQklHSU5UIGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiBrZXkgTk9UIE5VTEwKICAgQklHSU5UIHJvb21faWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw0MDAwPiB2YWx1ZQp9CmNsYXNzIG9jX2Rhdl9jYWxfcHJveHl7CiAqQklHSU5UIGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IG93bmVyX2lkIE5PVCBOVUxMCiAgIElOVEVHRVIgcGVybWlzc2lvbnMKICAgVkFSQ0hBUjw2ND4gcHJveHlfaWQgTk9UIE5VTEwKfQpjbGFzcyBvY19jYWxlbmRhcl9yZW1pbmRlcnN7CiAqQklHSU5UIGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiBhbGFybV9oYXNoIE5PVCBOVUxMCiAgIEJJR0lOVCBjYWxlbmRhcl9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gZXZlbnRfaGFzaCBOT1QgTlVMTAogICBTTUFMTElOVCBpc19yZWN1cnJlbmNlX2V4Y2VwdGlvbiBOT1QgTlVMTAogICBTTUFMTElOVCBpc19yZWN1cnJpbmcKICAgU01BTExJTlQgaXNfcmVsYXRpdmUgTk9UIE5VTEwKICAgU01BTExJTlQgaXNfcmVwZWF0X2Jhc2VkIE5PVCBOVUxMCiAgIEJJR0lOVCBub3RpZmljYXRpb25fZGF0ZSBOT1QgTlVMTAogICBCSUdJTlQgb2JqZWN0X2lkIE5PVCBOVUxMCiAgIEJJR0lOVCByZWN1cnJlbmNlX2lkCiAgIFZBUkNIQVI8MjU1PiB0eXBlIE5PVCBOVUxMCiAgIFZBUkNIQVI8NTEyPiB1aWQgTk9UIE5VTEwKfQpjbGFzcyBvY19kYXZfYWJzZW5jZXsKICpJTlRFR0VSIGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MTA-IGZpcnN0X2RheSBOT1QgTlVMTAogICBWQVJDSEFSPDEwPiBsYXN0X2RheSBOT1QgTlVMTAogICBURVhUIG1lc3NhZ2UgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gcmVwbGFjZW1lbnRfdXNlcl9kaXNwbGF5X25hbWUKICAgVkFSQ0hBUjw2ND4gcmVwbGFjZW1lbnRfdXNlcl9pZAogICBWQVJDSEFSPDEwMD4gc3RhdHVzIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IHVzZXJfaWQgTk9UIE5VTEwKfQpjbGFzcyBvY19jYWxlbmRhcnNfZmVkZXJhdGVkewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDc-IGNvbG9yCiAgIFZBUkNIQVI8MjU1PiBjb21wb25lbnRzIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiBkaXNwbGF5X25hbWUgTk9UIE5VTEwKICAgQklHSU5UIGxhc3Rfc3luYwogICBJTlRFR0VSIHBlcm1pc3Npb25zIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiBwcmluY2lwYWx1cmkgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IHJlbW90ZV91cmwgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IHNoYXJlZF9ieSBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gc2hhcmVkX2J5X2Rpc3BsYXlfbmFtZSBOT1QgTlVMTAogICBJTlRFR0VSIHN5bmNfdG9rZW4gTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IHRva2VuIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiB1cmkgTk9UIE5VTEwKfQpjbGFzcyBvY19mZWRlcmF0ZWRfcmVzaGFyZXN7CiAqQklHSU5UIHNoYXJlX2lkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiByZW1vdGVfaWQKfQpjbGFzcyBvY190cnVzdGVkX3NlcnZlcnN7CiAqSU5URUdFUiBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDI1Nj4gc2hhcmVkX3NlY3JldAogICBJTlRFR0VSIHN0YXR1cyBOT1QgTlVMTAogICBWQVJDSEFSPDUxMj4gc3luY190b2tlbgogICBWQVJDSEFSPDEyOD4gdG9rZW4KICAgVkFSQ0hBUjw1MTI-IHVybCBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gdXJsX2hhc2ggTk9UIE5VTEwKfQpjbGFzcyBvY191c2VyX3RyYW5zZmVyX293bmVyewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBCSUdJTlQgZmlsZV9pZCBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gbm9kZV9uYW1lIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IHNvdXJjZV91c2VyIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IHRhcmdldF91c2VyIE5PVCBOVUxMCn0KY2xhc3Mgb2Nfb3Blbl9sb2NhbF9lZGl0b3J7CiAqQklHSU5UIGlkIE5PVCBOVUxMCiAgIEJJR0lOVCBleHBpcmF0aW9uX3RpbWUgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gcGF0aF9oYXNoIE5PVCBOVUxMCiAgIFZBUkNIQVI8MTI4PiB0b2tlbiBOT1QgTlVMTAogICBWQVJDSEFSPDY0PiB1c2VyX2lkIE5PVCBOVUxMCn0KY2xhc3Mgb2Nfc2hhcmVzX2xpbWl0c3sKICpWQVJDSEFSPDMyPiBpZCBOT1QgTlVMTAogICBCSUdJTlQgZG93bmxvYWRzIE5PVCBOVUxMCiAgIEJJR0lOVCBsaW1pdCBOT1QgTlVMTAp9CmNsYXNzIG9jX2ZpbGVzX3JlbWluZGVyc3sKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgVElNRVNUQU1QIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgVElNRVNUQU1QIGR1ZV9kYXRlIE5PVCBOVUxMCiAgIEJJR0lOVCBmaWxlX2lkIE5PVCBOVUxMCiAgIEJPT0xFQU4gbm90aWZpZWQKICAgVElNRVNUQU1QIHVwZGF0ZWRfYXQgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gdXNlcl9pZCBOT1QgTlVMTAp9CmNsYXNzIG9jX3NoYXJlX2V4dGVybmFsewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBJTlRFR0VSIGFjY2VwdGVkIE5PVCBOVUxMCiAgIFZBUkNIQVI8NDAwMD4gbW91bnRwb2ludCBOT1QgTlVMTAogICBWQVJDSEFSPDMyPiBtb3VudHBvaW50X2hhc2ggTk9UIE5VTEwKICAgVkFSQ0hBUjw0MDAwPiBuYW1lIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiBvd25lciBOT1QgTlVMTAogICBCSUdJTlQgcGFyZW50CiAgIFZBUkNIQVI8NjQ-IHBhc3N3b3JkCiAgIFZBUkNIQVI8NTEyPiByZW1vdGUgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IHJlbW90ZV9pZAogICBWQVJDSEFSPDY0PiBzaGFyZV90b2tlbiBOT1QgTlVMTAogICBJTlRFR0VSIHNoYXJlX3R5cGUKICAgVkFSQ0hBUjw2ND4gdXNlciBOT1QgTlVMTAp9CmNsYXNzIG9jX2ZpbGVzX3RyYXNoewogKkJJR0lOVCBhdXRvX2lkIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IGRlbGV0ZWRfYnkKICAgVkFSQ0hBUjwyNTA-IGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8NTEyPiBsb2NhdGlvbiBOT1QgTlVMTAogICBWQVJDSEFSPDI1NT4gbWltZQogICBWQVJDSEFSPDEyPiB0aW1lc3RhbXAgTk9UIE5VTEwKICAgVkFSQ0hBUjw0PiB0eXBlCiAgIFZBUkNIQVI8NjQ-IHVzZXIgTk9UIE5VTEwKfQpjbGFzcyBvY19maWxlc192ZXJzaW9uc3sKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgQklHSU5UIGZpbGVfaWQgTk9UIE5VTEwKICAgSlNPTiBtZXRhZGF0YSBOT1QgTlVMTAogICBCSUdJTlQgbWltZXR5cGUgTk9UIE5VTEwKICAgQklHSU5UIHNpemUgTk9UIE5VTEwKICAgQklHSU5UIHRpbWVzdGFtcCBOT1QgTlVMTAp9CmNsYXNzIG9jX25vdGlmaWNhdGlvbnN7CiAqSU5URUdFUiBub3RpZmljYXRpb25faWQgTk9UIE5VTEwKICAgVEVYVCBhY3Rpb25zCiAgIFZBUkNIQVI8MzI-IGFwcCBOT1QgTlVMTAogICBWQVJDSEFSPDQwMDA-IGljb24KICAgVkFSQ0hBUjw0MDAwPiBsaW5rCiAgIFZBUkNIQVI8NjQ-IG1lc3NhZ2UKICAgVEVYVCBtZXNzYWdlX3BhcmFtZXRlcnMKICAgVkFSQ0hBUjw2ND4gb2JqZWN0X2lkIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IG9iamVjdF90eXBlIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IHN1YmplY3QgTk9UIE5VTEwKICAgVEVYVCBzdWJqZWN0X3BhcmFtZXRlcnMKICAgSU5URUdFUiB0aW1lc3RhbXAgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gdXNlciBOT1QgTlVMTAp9CmNsYXNzIG9jX25vdGlmaWNhdGlvbnNfcHVzaGhhc2h7CiAqSU5URUdFUiBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDMyPiBhcHB0eXBlIE5PVCBOVUxMCiAgIFZBUkNIQVI8MTI4PiBkZXZpY2VpZGVudGlmaWVyIE5PVCBOVUxMCiAgIFZBUkNIQVI8NTEyPiBkZXZpY2VwdWJsaWNrZXkgTk9UIE5VTEwKICAgVkFSQ0hBUjwxMjg-IGRldmljZXB1YmxpY2tleWhhc2ggTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTY-IHByb3h5c2VydmVyIE5PVCBOVUxMCiAgIFZBUkNIQVI8MTI4PiBwdXNodG9rZW5oYXNoIE5PVCBOVUxMCiAgIElOVEVHRVIgdG9rZW4gTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gdWlkIE5PVCBOVUxMCn0KY2xhc3Mgb2Nfbm90aWZpY2F0aW9uc19zZXR0aW5nc3sKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgSU5URUdFUiBiYXRjaF90aW1lIE5PVCBOVUxMCiAgIEJJR0lOVCBsYXN0X3NlbmRfaWQgTk9UIE5VTEwKICAgSU5URUdFUiBuZXh0X3NlbmRfdGltZSBOT1QgTlVMTAogICBWQVJDSEFSPDY0PiB1c2VyX2lkIE5PVCBOVUxMCn0KY2xhc3Mgb2Nfb2F1dGgyX2NsaWVudHN7CiAqSU5URUdFUiBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDY0PiBjbGllbnRfaWRlbnRpZmllciBOT1QgTlVMTAogICBWQVJDSEFSPDY0PiBuYW1lIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjAwMD4gcmVkaXJlY3RfdXJpIE5PVCBOVUxMCiAgIFZBUkNIQVI8NTEyPiBzZWNyZXQgTk9UIE5VTEwKfQpjbGFzcyBvY19vYXV0aDJfYWNjZXNzX3Rva2Vuc3sKICpJTlRFR0VSIGlkIE5PVCBOVUxMCiAgIElOVEVHRVIgY2xpZW50X2lkIE5PVCBOVUxMCiAgIEJJR0lOVCBjb2RlX2NyZWF0ZWRfYXQgTk9UIE5VTEwKICAgVkFSQ0hBUjw3ODY-IGVuY3J5cHRlZF90b2tlbiBOT1QgTlVMTAogICBWQVJDSEFSPDEyOD4gaGFzaGVkX2NvZGUgTk9UIE5VTEwKICAgQklHSU5UIHRva2VuX2NvdW50IE5PVCBOVUxMCiAgIElOVEVHRVIgdG9rZW5faWQgTk9UIE5VTEwKfQpjbGFzcyBvY19waG90b3NfYWxidW1zewogKkJJR0lOVCBhbGJ1bV9pZCBOT1QgTlVMTAogICBCSUdJTlQgY3JlYXRlZCBOT1QgTlVMTAogICBURVhUIGZpbHRlcnMKICAgQklHSU5UIGxhc3RfYWRkZWRfcGhvdG8gTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IGxvY2F0aW9uIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiBuYW1lIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU1PiB1c2VyIE5PVCBOVUxMCn0KY2xhc3Mgb2NfcGhvdG9zX2FsYnVtc19maWxlc3sKICpCSUdJTlQgYWxidW1fZmlsZV9pZCBOT1QgTlVMTAogICBCSUdJTlQgYWRkZWQgTk9UIE5VTEwKICAgQklHSU5UIGFsYnVtX2lkIE5PVCBOVUxMCiAgIEJJR0lOVCBmaWxlX2lkIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IG93bmVyCn0KY2xhc3Mgb2NfcGhvdG9zX2FsYnVtc19jb2xsYWJzewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBCSUdJTlQgYWxidW1faWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gY29sbGFib3JhdG9yX2lkIE5PVCBOVUxMCiAgIElOVEVHRVIgY29sbGFib3JhdG9yX3R5cGUgTk9UIE5VTEwKfQpjbGFzcyBvY19wcml2YWN5X2FkbWluc3sKICpJTlRFR0VSIGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IGRpc3BsYXluYW1lIE5PVCBOVUxMCn0KY2xhc3Mgb2Nfc3lzdGVtdGFnewogKkJJR0lOVCBpZCBOT1QgTlVMTAogICBWQVJDSEFSPDY-IGNvbG9yCiAgIFNNQUxMSU5UIGVkaXRhYmxlIE5PVCBOVUxMCiAgIFZBUkNIQVI8MzI-IGV0YWcKICAgVkFSQ0hBUjw2ND4gbmFtZSBOT1QgTlVMTAogICBTTUFMTElOVCB2aXNpYmlsaXR5IE5PVCBOVUxMCn0KY2xhc3Mgb2NfdGV4dF9kb2N1bWVudHN7CiAqQklHSU5UIGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IGJhc2VfdmVyc2lvbl9ldGFnCiAgIFZBUkNIQVI8OD4gY2hlY2tzdW0KICAgQklHSU5UIGN1cnJlbnRfdmVyc2lvbgogICBCSUdJTlQgbGFzdF9zYXZlZF92ZXJzaW9uCiAgIFZBUkNIQVI8NjQ-IGxhc3Rfc2F2ZWRfdmVyc2lvbl9ldGFnCiAgIEJJR0lOVCBsYXN0X3NhdmVkX3ZlcnNpb25fdGltZSBOT1QgTlVMTAp9CmNsYXNzIG9jX3RleHRfc2Vzc2lvbnN7CiAqQklHSU5UIGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8Nz4gY29sb3IKICAgQklHSU5UIGRvY3VtZW50X2lkIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IGd1ZXN0X25hbWUKICAgVEVYVCBsYXN0X2F3YXJlbmVzc19tZXNzYWdlCiAgIEJJR0lOVCBsYXN0X2NvbnRhY3QgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gdG9rZW4gTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gdXNlcl9pZAp9CmNsYXNzIG9jX3RleHRfc3RlcHN7CiAqQklHSU5UIGlkIE5PVCBOVUxMCiAgIFRFWFQgZGF0YSBOT1QgTlVMTAogICBCSUdJTlQgZG9jdW1lbnRfaWQgTk9UIE5VTEwKICAgQklHSU5UIHNlc3Npb25faWQgTk9UIE5VTEwKICAgQklHSU5UIHRpbWVzdGFtcCBOT1QgTlVMTAogICBCSUdJTlQgdmVyc2lvbgp9CmNsYXNzIG9jX3R3b2ZhY3Rvcl9iYWNrdXBjb2Rlc3sKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjwxMjg-IGNvZGUgTk9UIE5VTEwKICAgU01BTExJTlQgdXNlZCBOT1QgTlVMTAogICBWQVJDSEFSPDY0PiB1c2VyX2lkIE5PVCBOVUxMCn0KY2xhc3Mgb2NfdHdvZmFjdG9yX3RvdHBfc2VjcmV0c3sKICpJTlRFR0VSIGlkIE5PVCBOVUxMCiAgIEJJR0lOVCBsYXN0X2NvdW50ZXIgTk9UIE5VTEwKICAgVEVYVCBzZWNyZXQgTk9UIE5VTEwKICAgSU5URUdFUiBzdGF0ZSBOT1QgTlVMTAogICBWQVJDSEFSPDY0PiB1c2VyX2lkIE5PVCBOVUxMCn0KY2xhc3Mgb2NfdXNlcl9zdGF0dXN7CiAqQklHSU5UIGlkIE5PVCBOVUxMCiAgIElOVEVHRVIgY2xlYXJfYXQKICAgVkFSQ0hBUjwyNTU-IGN1c3RvbV9pY29uCiAgIFRFWFQgY3VzdG9tX21lc3NhZ2UKICAgQk9PTEVBTiBpc19iYWNrdXAKICAgQk9PTEVBTiBpc191c2VyX2RlZmluZWQKICAgVkFSQ0hBUjwyNTU-IG1lc3NhZ2VfaWQKICAgVkFSQ0hBUjwyNTU-IHN0YXR1cyBOT1QgTlVMTAogICBJTlRFR0VSIHN0YXR1c19tZXNzYWdlX3RpbWVzdGFtcCBOT1QgTlVMTAogICBJTlRFR0VSIHN0YXR1c190aW1lc3RhbXAgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTU-IHVzZXJfaWQgTk9UIE5VTEwKfQpjbGFzcyBvY193ZWJob29rX2xpc3RlbmVyc3sKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgVkFSQ0hBUjw2ND4gYXBwX2lkCiAgIFRFWFQgYXV0aF9kYXRhCiAgIFZBUkNIQVI8MTY-IGF1dGhfbWV0aG9kIE5PVCBOVUxMCiAgIFZBUkNIQVI8NDAwMD4gZXZlbnQgTk9UIE5VTEwKICAgVEVYVCBldmVudF9maWx0ZXIKICAgVEVYVCBoZWFkZXJzCiAgIFZBUkNIQVI8MzI-IGh0dHBfbWV0aG9kIE5PVCBOVUxMCiAgIFRFWFQgdG9rZW5fbmVlZGVkCiAgIFZBUkNIQVI8NDAwMD4gdXJpIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IHVzZXJfaWQKICAgVkFSQ0hBUjw2ND4gdXNlcl9pZF9maWx0ZXIKfQpjbGFzcyBvY193ZWJob29rX3Rva2Vuc3sKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgQklHSU5UIGNyZWF0ZWRfYXQgTk9UIE5VTEwKICAgQklHSU5UIHRva2VuX2lkIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IHVzZXJfaWQKfQpjbGFzcyBvY19mbG93X2NoZWNrc3sKICpJTlRFR0VSIGlkIE5PVCBOVUxMCiAgIFZBUkNIQVI8MjU2PiBjbGFzcyBOT1QgTlVMTAogICBWQVJDSEFSPDMyPiBoYXNoIE5PVCBOVUxMCiAgIFZBUkNIQVI8MTY-IG9wZXJhdG9yIE5PVCBOVUxMCiAgIFRFWFQgdmFsdWUKfQpjbGFzcyBvY19mbG93X29wZXJhdGlvbnN7CiAqSU5URUdFUiBpZCBOT1QgTlVMTAogICBURVhUIGNoZWNrcwogICBWQVJDSEFSPDI1Nj4gY2xhc3MgTk9UIE5VTEwKICAgVkFSQ0hBUjwyNTY-IGVudGl0eSBOT1QgTlVMTAogICBURVhUIGV2ZW50cyBOT1QgTlVMTAogICBWQVJDSEFSPDI1Nj4gbmFtZQogICBURVhUIG9wZXJhdGlvbgp9CmNsYXNzIG9jX2Zsb3dfb3BlcmF0aW9uc19zY29wZXsKICpCSUdJTlQgaWQgTk9UIE5VTEwKICAgSU5URUdFUiBvcGVyYXRpb25faWQgTk9UIE5VTEwKICAgSU5URUdFUiB0eXBlIE5PVCBOVUxMCiAgIFZBUkNIQVI8NjQ-IHZhbHVlCn0K)
